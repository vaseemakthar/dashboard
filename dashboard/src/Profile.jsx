// src/Profile.jsx
import React from 'react';
import '../src/css/Profile.css';


const Profile = () => {
    return (
        <div>
            <nav>
                <div className="logo">Social Media Analytics Dashboard</div>
                <div className="menu">
                    <a href="/home">Home</a>
                    <a href="/dashboard">Dashboard</a>
                    <a href="/data-report">Reports</a>
                    <a href="/profile">Profile</a>
                </div>
            </nav>

            <div className="profile-container">
                <div className="profile-header">
                    <img src="img/2.jpeg" alt="User Profile Picture" className="profile-pic" />
                    <h2>Rambo</h2>
                    <p className="bio">
                        A Passionate content creator dedicated to inspiring and <br />engaging audiences
                        through captivating stories and visuals.
                    </p>
                </div>

                <div className="profile-details">
                    <div className="detail-box">
                        <h3>Name</h3>
                        <p>Rambo</p>
                    </div>
                    <div className="detail-box">
                        <h3>Email</h3>
                        <p>rambo@example.com</p>
                    </div>
                    <div className="detail-box">
                        <h3>Role</h3>
                        <p>Content Creator</p>
                    </div>
                    <div className="detail-box">
                        <h3>Account Created</h3>
                        <p>January 15, 2023</p>
                    </div>
                    <div className="detail-box">
                        <h3>Last Login</h3>
                        <p>October 10, 2024</p>
                    </div>
                    <div className="detail-box">
                        <h3>Subscription</h3>
                        <p>Premium</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
