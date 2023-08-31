import Card from "./Card";
import "../styles/currentweather.css";
import PropTypes from "prop-types";
import {
    faWater,
    faLeaf,
    faDroplet,
    faSun,
    faWind,
    faGauge,
    fas,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

CurrentWeather.propTypes = {
    weatherdata: PropTypes.object.isRequired,
};
function CurrentWeather({ weatherdata }) {
    const { current, location } = weatherdata;
    // const currentDate = current.last_updated;

    // getting date, year and month separately
    // const curDate = {
    //     date: currentDate.split(" ")[0].split("-")[2],
    //     month: currentDate.split(" ")[0].split("-")[1],
    //     year: currentDate.split(" ")[0].split("-")[0],
    // };

    // calculate aqi
    const co = current.air_quality.co;
    const gb_defra_index = 1;
    const no2 = current.air_quality.no2;
    const o3 = current.air_quality.o3;
    const pm2_5 = current.air_quality.pm2_5;
    const pm10 = current.air_quality.pm10;
    const so2 = current.air_quality.so2;
    const us_epa_index = 1;
    const aqi =
        (co + no2 + o3 + pm2_5 + pm10 + so2 + gb_defra_index + us_epa_index) /
        8;

    return (
        <div className="cwRow1">
            <div className="currentWeather">
                <div>
                    <h2>
                        {location.name}, {location.country}
                    </h2>
                </div>
                <div className="secondLayer">
                    <div>
                        <h2>{current.temp_c.toFixed(0)}°C</h2>
                        <p>Feels like {current.feelslike_c.toFixed(0)}°</p>
                    </div>
                    <img
                        src={current.condition.icon}
                        alt="current weather icon"
                        className="cwicon"
                    />
                </div>
                <div>
                    <p>
                        <strong>{current.condition.text}</strong>
                    </p>
                </div>
            </div>
            <Card>
                <ul className="current-weather-info">
                    <li>
                        <FontAwesomeIcon icon={faWind} className="icon" />
                        <h3>{current.gust_kph}km/h</h3>
                        <p>Wind</p>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faDroplet} className="icon" />
                        <h3>{current.cloud}%</h3>
                        <p>Chance of rain</p>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faWater} className="icon" />
                        <h3>{current.humidity}%</h3>
                        <p>Humidity</p>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faSun} className="icon" />
                        <h3>{current.uv}</h3>
                        <p>UV</p>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faGauge} className="icon" />
                        <h3>{current.pressure_mb}mbar</h3>
                        <p>Pressure</p>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faLeaf} className="icon" />
                        <h3>{aqi.toFixed(0)}</h3>
                        <p>AQI</p>
                    </li>
                </ul>
            </Card>
        </div>
    );
}

export default CurrentWeather;
