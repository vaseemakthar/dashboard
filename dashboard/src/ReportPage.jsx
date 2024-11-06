import React from 'react';
import '../src/css/ReportPage.css';  // Assuming the CSS file is in the src folder

const ReportPage = () => {
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
        <section className="report-header">
          <h2>Generate Reports</h2>
          <p>Download in PDF or Excel format for detailed analysis</p>
        </section>

        <section className="report-options">
          <button>Download PDF</button>
          <button>Download Excel</button>
        </section>

        <section className="sample-charts">
          {/* Add your chart components or images here */}
        </section>

        <section className="comparison-view">
          <h3>Comparison Overview</h3>
          <table>
            <thead>
              <tr>
                <th>Metric</th>
                <th>YouTube</th>
                <th>LinkedIn</th>
                <th>Growth (%)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Followers</td>
                <td>10,000</td>
                <td>15,000</td>
                <td>+50%</td>
              </tr>
              <tr>
                <td>Engagement Rate</td>
                <td>8.5%</td>
                <td>12.3%</td>
                <td>+3.8%</td>
              </tr>
              <tr>
                <td>Views (Monthly)</td>
                <td>200,000</td>
                <td>180,000</td>
                <td>-10%</td>
              </tr>
              <tr>
                <td>Posts (Monthly)</td>
                <td>20</td>
                <td>30</td>
                <td>+50%</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default ReportPage;
