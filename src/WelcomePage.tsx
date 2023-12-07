import React, {useContext} from "react";
import "./WelcomePage.css";
import Flatten from "./Flatten";
import sample from "./sample.json";

//const json2 = {"entries": ["el1", "el2", {"ek3": "test" }]};



const WelcomePage = () => {

    return (
        <div className="welcome-page">
            <h1>Vite template</h1>
            <p>Frontend version {APP_VERSION}</p>
            <Flatten node={sample}></Flatten>
        </div>
    );
};

export default WelcomePage;
