import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { Profile } from '../pages/Profile/Profile';
import { JobDetails } from '../components/JobDetails/JobDetails';
import { Login } from '../components/Login/Login';
import { Register } from '../components/Register/Register';
import { useEffect, useState } from 'react';

const Router = () => {
    const [checking, setChecking] = useState(true)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {

    }, [])


    return (

        <Routes>
            <Route path="/login/" element={<Login />} />
            <Route path="*" element={<Login />} />
        </Routes>
    )
};

export default Router;

/*

            <Route index element={<Home />} />
            <Route path="/profile/" element={<Profile />} />
            <Route path="/jobDetail/:id" element={<JobDetails />} />
            <Route path="/register/" element={<Register />} />
*/