import React from "react";
import './home.css';

export default function Home() {
    return(
        <div className="page">
            <div className="home">
                <h1 className="homeText">
                    Hey,
                </h1>
                <h1 className="homeText">
                    my name is William Duncan
                </h1>
            </div>
            <img className="image1" src='https://cdn-assets.theforage.com/icons/hiring-paths/software-engineering-career-ed-refresh.svg'
            height={400}
            ></img>
            
        </div>
    )
}