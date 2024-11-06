// src/Home.jsx
import React from 'react';
import '../src/css/Home.css';

const Home = () => {
    return (
        <div>
            <header>
                <nav>
                    <div className="logo">Social Media Analytics Dashboard</div>
                    <div className="menu">
                        <a href="/home">Home</a>
                        <a href="/dashboard">Dashboard</a>
                        <a href="/data-report">Reports</a>
                        <a href="/profile">Profile</a>
                    </div>
                </nav>
                <div className="hero">
                    <h1>Welcome to Social Media Analytics</h1>
                    <p>Your go-to dashboard for tracking and improving social media engagement!</p>
                    <button>Get Started</button>
                </div>
            </header>
            <section className="features">
                <h2>Features</h2>
                <div className="feature-list">
                    <div className="feature">
                        <h3>Real-Time Analytics</h3>
                        <p>Get updates as they happen across all major social platforms.</p>
                    </div>
                    <div className="feature">
                        <h3>Custom Reports</h3>
                        <p>Generate and download personalized reports to meet your needs.</p>
                    </div>
                    <div className="feature">
                        <h3>Engagement Insights</h3>
                        <p>Understand audience behaviors and trends with detailed insights.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
