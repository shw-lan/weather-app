import React from "react";
import sunrise from "../assets/sunrise.png";
import sunset from "../assets/sunset.png";
import Card from "./Card";
import "../styles/riseset.css";

function RiseSet({ weatherdata }) {
    const { forecastday } = weatherdata.forecast;
    return (
        <Card>
            <div className="today-container">
                <div className="today-sun">
                    <p className="item1">Sunrise</p>
                    <b className="item2">{forecastday[0].astro.sunrise}</b>
                    <img
                        src={sunrise}
                        alt="sunrise"
                        className="sun-icon item3"
                    />
                </div>
                <div className="today-sun">
                    <p className="item1">Sunset</p>
                    <b className="item2">{forecastday[0].astro.sunrise}</b>
                    <img src={sunset} alt="sunset" className="sun-icon item3" />
                </div>
            </div>
        </Card>
    );
}

export default RiseSet;
