import "../styles/forecasthour.css";
import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/element/css/effect-cards";

function Forecast({ weatherdata, slides }) {
    const { hour } = weatherdata.forecast.forecastday[0];

    return (
        <div className="forecast-hour-container">
            <h4>24-hour Forecast</h4>
            <Swiper
                spaceBetween={8}
                slidesPerView={slides}
                className="forecast-card-container"
            >
                {hour.map((hours, index) => {
                    return (
                        <SwiperSlide key={index} className="swiper-slide">
                            <Card>
                                <div className="forecast-card">
                                    <h4>{hours.time.split(" ")[1]}</h4>
                                    <img
                                        src={hours.condition.icon}
                                        alt="icon"
                                        className="weather-condition-icon"
                                    />
                                    <h4>{hours.temp_c.toFixed(0)}°</h4>
                                    <p className="weather-text"></p>
                                </div>
                            </Card>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}

export default Forecast;
