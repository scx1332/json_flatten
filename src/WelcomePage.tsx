import React, { useContext } from "react";
import "./WelcomePage.css";

const WelcomePage = () => {

    return (
        <div className="welcome-page">
            <h1>Vite template</h1>
            <p>Frontend version {APP_VERSION}</p>
        </div>
    );
};

export default WelcomePage;
