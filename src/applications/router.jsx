import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { auth, onAuthStateChanged } from '../firebase/firebase';
import { useDispatch } from 'react-redux';

import { login } from '../actions/auth';

import { Home } from '../pages/Home/Home';
import { Profile } from '../pages/Profile/Profile';
import { JobDetails } from '../components/JobDetails/JobDetails';
import { Login } from '../components/Login/Login';
import { Register } from '../components/Register/Register';

const Router = () => {
    const dispatch = useDispatch();
    const [checking, setChecking] = useState(true)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

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
        return <h3>cargando...</h3>
    }

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