import React, { useEffect, useState } from 'react'
import './Administrar.css'

import { getFirestore, collection, onSnapshot } from 'firebase/firestore';
import { app } from '../../firebase/firebase';
import { Link } from 'react-router-dom';
import { Job } from '../../components/Job/Job';


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

  return (
    <div className="adminPanel">
      <div className="jobList">
        {jobs.map(job => {
          return (
            <Link to={`/jobDetail/${job.id}`} key={job.id} style={{ textDecoration: 'none' }}>
              <Job job={job} />
            </Link >
          )
        })
        }
      </div>

    </div>
  )
}
