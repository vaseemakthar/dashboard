import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../src/Home';
import Profile from './Profile'; 
import Dashboard from './Dashboard';
import ReportPage from './ReportPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/data-report" element={<ReportPage />}/>
                {/* Add more routes for Dashboard, Reports, Profile as needed */}
            </Routes>
        </Router>
    );
}

export default App;
