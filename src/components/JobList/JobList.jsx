import './JobList.css'
import { Job } from '../Job/Job'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { getFirestore, collection, onSnapshot } from 'firebase/firestore';
import { app, db } from '../../firebase/firebase';

export const JobList = ({ cityfilter, timefilter }) => {
  const [jobs, setJobs] = useState([]);
  const [city, setCity] = useState(cityfilter)
  const [time, setTime] = useState(timefilter)

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


  useEffect(() => {
    setCity(cityfilter);
  }, [cityfilter]);

  useEffect(() => {
    setTime(timefilter);
  }, [timefilter]);
  return (
    <div className="jobList">
      {jobs.map(job => {
        //SI NO TIENE FILTROS
        if ((city === null || city === "false") && (time === null || time === "false")) {
          return (
            <Link to={`/jobDetail/${job.id}`} key={job.id} style={{ textDecoration: 'none' }}>
              <Job job={job} />
            </Link >
          )
        }
        //SI TIENE FILTRO TIME
        else if ((city === null || city === "false") && (time == job.time)) {
          return (
            <Link to={`/jobDetail/${job.id}`} key={job.id} style={{ textDecoration: 'none' }}>
              <Job job={job} />
            </Link >
          )
        }
        //SI TIENE FILTRO CITY
        else if ((city == job.city) && (time === null || time === "false")) {
          return (
            <Link to={`/jobDetail/${job.id}`} key={job.id} style={{ textDecoration: 'none' }}>
              <Job job={job} />
            </Link >
          )
        }
        //SI TIENE TODOS LOS FILTROS
        else if ((city == job.city) && (time == job.time)) {
          return (
            <Link to={`/jobDetail/${job.id}`} key={job.id} style={{ textDecoration: 'none' }}>
              <Job job={job} />
            </Link >
          )
        }
      })}
    </div>
  )
}
