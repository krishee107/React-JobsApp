import { useEffect, useState } from 'react';

export const useFilteredJobs = (cityfilter, timefilter, jobs) => {
    const [city, setCity] = useState(cityfilter);
    const [time, setTime] = useState(timefilter);
    const [filteredJobs, setFilteredJobs] = useState(jobs);

    useEffect(() => {
        setCity(cityfilter);
    }, [cityfilter]);

    useEffect(() => {
        setTime(timefilter);
    }, [timefilter]);

    useEffect(() => {
        setFilteredJobs(jobs.filter(job => {
            if ((city === null || city === "false") && (time === null || time === "false")) {
                return true;
            } else if ((city === null || city === "false") && (time == job.time)) {
                return true;
            } else if ((city == job.city) && (time === null || time === "false")) {
                return true;
            } else if ((city == job.city) && (time == job.time)) {
                return true;
            } else {
                return false;
            }
        }));
    }, [city, time, jobs]);

    return filteredJobs;
};
