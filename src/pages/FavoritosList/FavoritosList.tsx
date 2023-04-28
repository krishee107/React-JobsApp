import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './FavoritosList.css';
import { Job } from '../../components/Job/Job';
import useFavJob from '../../hooks/useFavJob';

export const FavoritosList = () => {
    const [jobsList, setJobsList] = useState([]);
    const { favJobs } = useFavJob();
    useEffect(() => {
        getFavoriteJobs();
    }, []);

    const getFavoriteJobs = async () => {
        const jobs = await favJobs();
        if (jobs != null)
            setJobsList(jobs);
    };

    return (
        <div className='favList'>
            {/* Renderiza otros datos del usuario */}
            {jobsList.length === 0 ? <h1>No hay ofertas favoritas</h1>
                :
                jobsList.map(job => (
                    <Link to={`/jobDetail/${job.id}`} key={job.id}>
                        <Job job={job.job} />
                    </Link>
                ))

            }


        </div>
    );
};