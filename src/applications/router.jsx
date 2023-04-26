import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { auth, onAuthStateChanged } from '../firebase/firebase';
import { useDispatch } from 'react-redux';

import { login } from '../actions/auth';

import { Home } from '../pages/Home/Home';
import { Profile } from '../pages/Profile/Profile';
import { JobDetails } from '../pages/JobDetails/JobDetails';
import { Login } from '../components/Login/Login';
import { CreateJob } from '../pages/CeateJob/CreateJob';
import { Administrar } from '../pages/Administrar/Administrar';

const Router = () => {
    const dispatch = useDispatch();
    const [checking, setChecking] = useState(true)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [userType, setUserType] = useState(localStorage.getItem("userType") ?? "usuario");

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setIsLoggedIn(true)
            } else {
                setIsLoggedIn(false)
            }
            setChecking(false)
        });
    }, [dispatch, checking, isLoggedIn])

    if (checking) {
        return <h3>Cargando...</h3>
    }

    return (

        <Routes>
            <Route path="/login/" element={<Login />} />
            <Route path="*" element={<Login />} />
            {
                isLoggedIn &&
                <Route index element={<Home />} />
            }
            {
                isLoggedIn &&
                <Route path="/profile/" element={<Profile />} />
            }
            {
                isLoggedIn &&
                <Route path="/jobDetail/:id" element={<JobDetails />} />
            }

            {
                ((isLoggedIn && userType == "empresa") || (isLoggedIn && userType == "administrador")) &&
                <Route path="/create/" element={<CreateJob />} />
            }
            {
                (isLoggedIn && userType == "administrador") &&
                <Route path="/administrar/" element={<Administrar />} />
            }
        </Routes>
    )
};


export default Router;
