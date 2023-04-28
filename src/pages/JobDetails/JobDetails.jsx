import './JobDetails.css'

import { useEffect, useState } from "react";
import { getFirestore, doc, getDoc, updateDoc, arrayRemove, arrayUnion, setDoc } from "firebase/firestore";
import { Link, useParams } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import moment from 'moment'
import { useDispatch } from 'react-redux';
import { auth, onAuthStateChanged } from '../../firebase/firebase';
import { login } from '../../actions/auth';

export const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [texto, setTexto] = useState(null)
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        setUser(user);
      }
    });
  }, [user])

  /* Carga la oferta de trabajo */
  useEffect(() => {
    const db = getFirestore();
    const jobRef = doc(db, "ofertas", id);
    const getJob = async () => {
      const jobDoc = await getDoc(jobRef);
      if (jobDoc.exists()) {
        setJob(jobDoc.data());
      } else {
        console.log("No such document!");
      }
    };
    getJob();
  }, [id]);

  /* Arregla el texto de la oferta de trabajo */
  useEffect(() => {
    if (job) {
      arreglarTexto();
    }
  }, [job]);

  const arreglarTexto = () => {
    const parrafos = job.texto.split("\n\n");
    let texto_con_etiquetas = "";
    for (let parrafo of parrafos) {
      texto_con_etiquetas += `<p>${parrafo}</p>`;
    }
    setTexto(texto_con_etiquetas);
  };

  /* Calcula la diferencia de tiempo */
  const timeAgo = (date) => {
    return moment(date).fromNow(); // calcula la diferencia de tiempo
  }

  /* Añade o elimina la oferta de trabajo de favoritos */
  const favJob = async () => {
    const uid = user.uid;
    if (uid === null) {
      console.log("No hay usuario logueado");
      return;
    }

    const db = getFirestore();
    const jobRef = doc(db, "ofertas", id);

    const jobDoc = await getDoc(jobRef);
    // Existe el job
    if (jobDoc.exists()) {
      const jobData = jobDoc.data();
      const favRef = doc(db, "favoritos", uid);

      const favDoc = await getDoc(favRef);
      // Existe el documento de favoritos del usuario
      if (favDoc.exists()) {
        const favData = favDoc.data();
        const favJobs = favData.jobs.map(job => job.id);
        if (favJobs.includes(jobRef.id)) {
          console.log("Ya existe el job en favoritos del usuario, lo quitamos");
          // Lo eliminamos de favoritos
          await updateDoc(favRef, {
            jobs: favData.jobs.filter(job => job.id !== jobRef.id)
          });
        } else {
          // Lo añadimos a favoritos
          await updateDoc(favRef, {
            jobs: [...favData.jobs, jobRef]
          });
        }
      } else {
        // El documento de favoritos del usuario no existe, lo creamos
        console.log("No existe el documento de favoritos del usuario, lo añadimos");
        await setDoc(favRef, {
          jobs: [
            jobRef]
        });
      }
    } else {
      console.log("No such document!");
    }
  };

  return (
    <div >
      {job ?
        <div className="jobDetails">
          <div className="jobOptions">
            <Link to="/">
              <ArrowBackIcon />
              Back to search
            </Link>

            <div className="howTo">
              <h3>HOW TO APPLY</h3>
              <p>
                Please email a copy of your resume and online portfolio to <span>example@job.com</span>  & cc <span>otherexample@joboffer.com</span>
              </p>
            </div>
          </div>

          <div className="jobInfo">

            <div className="jobHeader">
              <div className="jobTitle">
                {job.titulo}
                <div>
                  {
                    job.time == 'fullTime' ?
                      <div className="time">Full time</div>
                      :
                      job.time == 'partTime' ?
                        <div className="time">Part time</div>
                        :
                        <div className="time">No especificado </div>
                  }
                </div>

                <div className="job_fav">
                  <FavoriteBorderIcon onClick={favJob} />
                </div>
              </div>
              <div className="job_status">
                <div className="ago">
                  <i className="fa-regular fa-clock"></i>
                  {timeAgo(job.creacion.toDate().toString())}
                </div>
              </div>
            </div>

            <div className="job_profile">
              <div className="job_profile_img">
                {job.urlLogo != '' ?
                  <img src={job.urlLogo} />
                  :
                  <img src="https://gigr.com/images/png/default_logo.png" alt="Job logo" />
                }
              </div>
              <div className="job_profile_name">{job.nombre}</div>
              <div className="job_profile_city">
                <i className="fa-solid fa-earth-americas"></i>
                {
                  job.city ?
                    job.city
                    :
                    'No especificado'
                }
              </div>
            </div>

            <div className="job_text">
              {texto ?
                <div dangerouslySetInnerHTML={{ __html: texto }}></div>
                :
                <div>Ha ocurrido un error al mostrar el texto o esta oferta no tiene ningún texto.</div>
              }

            </div>

          </div>
        </div>
        :
        <div>Cargando...</div>
      }
    </div >
  )
}
