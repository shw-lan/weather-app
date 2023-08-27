import { useState, useEffect } from "react";
import "../styles/landing.css";
import CurrentWeather from "./CurrentWeather";
import ForecastHour from "./ForecastHour";
import ForecastDay from "./ForecastDay";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Landing() {
    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState("Shillong");
    const [slides, setSlides] = useState(3);

    let [suggest, setSuggest] = useState([]);

    useEffect(() => {
        if (window.innerWidth > 630) {
            setSlides(4);
        } else {
            setSlides(3);
        }
    }, []);

    const autoComplete = async (e) => {
        await fetch(
            `${import.meta.env.VITE_URL}search.json?key=${
                import.meta.env.VITE_APIKEY
            }&q=${e.target.value}`
        )
            .then((res) => res.json())
            .then((data) => setSuggest(data));
    };

    const handleChange = (e) => {
        setCity(e.target[0].value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleChange(e);
    };

    // fetch weatherdata
    const getWeather = async () => {
        console.log("fetching weather");
        try {
            await fetch(
                `${import.meta.env.VITE_URL}forecast.json?key=${
                    import.meta.env.VITE_APIKEY
                }&q=${city}&aqi=yes&days=14`
            )
                .then((res) => res.json())
                .then((data) => setWeatherData(data));
        } catch (error) {
            console.error(error);
        } finally {
            console.log("weather fetched");
        }
    };

    // fetch on city change
    useEffect(() => {
        getWeather();
    }, [city]);

    // fetch every 30mins
    useEffect(() => {
        const interval = setInterval(getWeather, 1000 * 60 * 30);
        return () => {
            clearInterval(interval);
        };
    }, []);

    if (!weatherData) {
        return <div>Loading...</div>;
    }

    // console.log(weatherData);
    return (
        <section className="container" id="container">
            <div className="searchbox-parent">
                <form onSubmit={handleSubmit}>
                    <div className="search-container">
                        <input
                            type="text"
                            spellCheck="false"
                            placeholder="Search for location"
                            id="searchBox"
                            onSubmit={handleSubmit}
                            onChange={autoComplete}
                        />
                        <button type="submit" className="icon-search-btn">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </form>
                <ul className="suggest">
                    {suggest.length > 0 &&
                        suggest.map((loc) => (
                            <li
                                key={loc.id}
                                onClick={(e) => {
                                    document.getElementById("searchBox").value =
                                        e.target.innerText;
                                }}
                            >
                                {loc.name}, {loc.region}, {loc.country}
                            </li>
                        ))}
                </ul>
            </div>
            <CurrentWeather weatherdata={weatherData} />
            <ForecastHour weatherdata={weatherData} slides={slides} />
            <ForecastDay weatherdata={weatherData} slides={slides} />
        </section>
    );
}

export default Landing;
