import React, { useEffect, useState } from 'react'
import './Administrar.css'

import { getFirestore, collection, onSnapshot, doc, deleteDoc } from 'firebase/firestore';
import { app } from '../../firebase/firebase';
import { Link } from 'react-router-dom';
import { Job } from '../../components/Job/Job';
import { Button } from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';

export const Administrar = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const dbFirestore = getFirestore(app);
    const jobsCollectionRef = collection(dbFirestore, 'ofertas');

    const unsubscribe = onSnapshot(jobsCollectionRef, snapshot => {
      setJobs(snapshot.docs.map(doc => ({
        id: doc.id,
        creacion: doc.data().creacion,
        ...doc.data()
      })));
    });
    return () => unsubscribe();
  }, []);

  const deleteJob = (id) => {
    const db = getFirestore();
    const jobRef = doc(db, "ofertas", id);
    deleteDoc(jobRef)
      .then(() => {
        console.log("Se ha borrado correctamente");
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  };

  return (
    <div className="adminPanel">
      <div className="jobList">
        {jobs.map((job, index) => {
          return (
            <div className="job_box" key={index}>
              <Link to={`/jobDetail/${job.id}`} key={job.id} style={{ textDecoration: 'none', width: `100%` }}>
                <Job job={job} />
              </Link >
              <Button
                variant="outlined"
                startIcon={<DeleteIcon />}
                style={{ color: `red`, borderColor: `red` }}
                onClick={() => deleteJob(job.id)}
              >

                Delete
              </Button>
            </div>
          )
        })
        }
      </div>

    </div>
  )
}
