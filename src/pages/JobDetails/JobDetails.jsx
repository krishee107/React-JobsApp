import './JobDetails.css'

import { useEffect, useState } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { Link, useParams } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import moment from 'moment'

export const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [texto, setTexto] = useState(null)

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

  const timeAgo = (date) => {
    return moment(date).fromNow(); // calcula la diferencia de tiempo
  }

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
              <div className="job_profile_name">{job.city}</div>
              <div className="job_profile_city">
                <i className="fa-solid fa-earth-americas"></i>
                New york
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
