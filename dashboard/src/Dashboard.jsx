import React, { useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import '../src/css/Dashboard.css';

import { Chart as ChartJS, LineElement, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend, PointElement } from 'chart.js';

// Register the required components of Chart.js
ChartJS.register(
    LineElement,
    BarElement,
    PointElement, // Register Point Element
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend
);

const Dashboard = () => {
    useEffect(() => {
        // You could initialize more complex charts or fetch dynamic data here if needed
    }, []);

    // Data for Engagement Over Time (Line Chart)
    const engagementData = {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [{
            label: 'Engagements',
            data: [300, 400, 600, 700],
            backgroundColor: 'rgba(33, 150, 243, 0.2)',
            borderColor: '#2196f3',
            borderWidth: 2,
            fill: true,
        }]
    };

    // Data for Followers Growth (Bar Chart)
    const followersData = {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [{
            label: 'Followers Growth',
            data: [200, 150, 300, 250],
            backgroundColor: '#2196f3',
            borderColor: '#1976d2',
            borderWidth: 1
        }]
    };

    // Options for the charts
    const chartOptions = {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Number of Engagements' // Default, will change dynamically if needed
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Weeks'
                }
            }
        }
    };

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
            </header>

            <main>
                <section className="overview">
                    <h2>Dashboard Overview</h2>
                    <p>Real-time engagement metrics and user insights</p>
                </section>

                <section className="analytics">
                    <div className="chart">
                        <h3>Engagement Over Time</h3>
                        <Line data={engagementData} options={chartOptions} />
                        <div className="data">
                            <p>User ID (YouTube): <strong>user_yt123</strong></p>
                            <p>Total Engagements: 1,234</p>
                            <p>Average Engagement Rate: 5.6%</p>
                        </div>
                    </div>

                    <div className="chart">
                        <h3>Followers Growth</h3>
                        <Bar data={followersData} options={chartOptions} />
                        <div className="data">
                            <p>User ID (LinkedIn): <strong>user_ig456</strong></p>
                            <p>Total Followers: 10,500</p>
                            <p>Followers Gained This Month: 250</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Dashboard;
