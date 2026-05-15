import React from "react";
import StatCard from "../components/StatCard";
import "../styles/Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Admin Dashboard</h1>
      <p className="dashboard-subtitle">
        Welcome back! Here is your business overview.
      </p>

      <div className="stats-grid">
        <StatCard
          title="Total Users"
          value="1,245"
          icon="👥"
        />

        <StatCard
          title="Total Products"
          value="356"
          icon="📦"
        />

        <StatCard
          title="Total Orders"
          value="892"
          icon="🛒"
        />

        <StatCard
          title="Revenue"
          value="₹4,25,000"
          icon="💰"
        />
      </div>
    </div>
  );
}

export default Dashboard;