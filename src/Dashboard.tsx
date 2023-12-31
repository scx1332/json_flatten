import React from "react";
import "./Dashboard.css";
import { Routes, Route, Link } from "react-router-dom";
import WelcomePage from "./WelcomePage";

const Dashboard = () => {
    return (
        <div>
            <div>
                <div className="top-header">
                    <div className="top-header-title">Example page</div>
                    <div className="top-header-navigation">
                        <Link to="/">Main</Link>
                        <Link to="/page2">Page 2</Link>
                        <Link to="/page3">Page 3</Link>
                        <Link to="/backend">Backend settings</Link>
                    </div>
                </div>
                <div className="main-content">
                    <Routes>
                        <Route path="/" element={<WelcomePage />} />
                        <Route path="page2" element={<div>Page 2</div>} />
                        <Route path="page3" element={<div>Page 3</div>} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
