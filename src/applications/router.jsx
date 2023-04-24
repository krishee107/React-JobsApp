import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { Profile } from '../pages/Profile/Profile';
import { JobDetails } from '../components/JobDetails/JobDetails';

const Router = () => (
    <Routes>
        <Route index element={<Home />} />
        <Route path="/profile/" element={<Profile />} />
        <Route path="/jobDetail/:id" element={<JobDetails />} />

        <Route path="*" element={<div>404</div>} />
    </Routes>
);

export default Router;