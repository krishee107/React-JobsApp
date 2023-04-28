import './JobList.css';
import { Job } from '../Job/Job';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useFilteredJobs } from '../../hooks/useFilteredJobs';
import { getFirestore, collection, onSnapshot } from 'firebase/firestore';
import { app, db } from '../../firebase/firebase';


export const JobList = ({ cityfilter, timefilter }) => {
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

  const filteredJobs = useFilteredJobs(cityfilter, timefilter, jobs);

  return (
    <div className="jobList">
      {filteredJobs.map(job => (
        <Link to={`/jobDetail/${job.id}`} key={job.id} style={{ textDecoration: 'none' }}>
          <Job job={job} />
        </Link>
      ))}
    </div>
  );
};
