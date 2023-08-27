import "../styles/forecastday.css";
import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// if date == today return "Today", if tomorrow return "Tomorrow"
const isTodayOrTomorrow = (date) => {
    const oneDay = 60 * 60 * 24 * 1000;
    if (date.getDate() === new Date().getDate()) return "Today";
    if (date.getDate() === new Date(new Date().getTime() + oneDay).getDate())
        return "Tomorrow";
    return date.toLocaleDateString("en-US", {
        weekday: "long",
    });
};

function Forecast_day({ weatherdata }) {
    const { forecastday } = weatherdata.forecast;
    // console.log(forecastday);
    return (
        <div className="forecast-day-container">
            <h4>14-day Forecast</h4>
            <Swiper
                spaceBetween={8}
                slidesPerView={3}
                className="forecast-day-card-container"
            >
                {forecastday.map((days, index) => {
                    const date = new Date(days.date.replaceAll("-", ","));
                    const todayOrTomorrow = isTodayOrTomorrow(date);
                    const weekday = date.toLocaleDateString("en-US", {
                        weekday: "long",
                    });
                    return (
                        <SwiperSlide key={index}>
                            <Card>
                                <div className="forecast-day-card">
                                    <h4>{todayOrTomorrow}</h4>
                                    <p className="date">{`${date.getDate()}/${date.getMonth()}`}</p>
                                    <img
                                        src={days.day.condition.icon}
                                        alt="weather icon"
                                        className="weather-condition-icon"
                                    />
                                    <strong>
                                        <p>{`${days.day.maxtemp_c.toFixed(
                                            0
                                        )}/${days.day.mintemp_c.toFixed(
                                            0
                                        )}°`}</p>
                                    </strong>
                                </div>
                            </Card>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}

export default Forecast_day;
