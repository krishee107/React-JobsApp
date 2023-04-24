import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { Profile } from '../pages/Profile/Profile';
import { JobDetails } from '../components/JobDetails/JobDetails';
import { Login } from '../components/Login/Login';
import { Register } from '../components/Register/Register';

const Router = () => (
    <Routes>
        <Route index element={<Home />} />
        <Route path="/profile/" element={<Profile />} />
        <Route path="/jobDetail/:id" element={<JobDetails />} />
        <Route path="/login/" element={<Login />} />
        <Route path="/register/" element={<Register />} />
        <Route path="*" element={<div>404</div>} />
    </Routes>
);

export default Router;