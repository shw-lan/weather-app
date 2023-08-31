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
    return (
        <div className="forecast-day-container">
            <h4>3-day Forecast</h4>
            <Swiper
                spaceBetween={8}
                slidesPerView={3}
                className="forecast-day-card-container"
            >
                {forecastday.map((days, index) => {
                    const date = new Date(days.date.replaceAll("-", ","));
                    const todayOrTomorrow = isTodayOrTomorrow(date);
                    // const weekday = date.toLocaleDateString("en-US", {
                    //     weekday: "long",
                    // });
                    return (
                        <SwiperSlide
                            key={index}
                            // style={{ flex: index == 0 ? "2" : "1" }}
                            className="swiper-slide-day"
                        >
                            <Card>
                                <div
                                    className="forecast-day-card"
                                    // style={{
                                    //     justifyContent:
                                    //         index == 0
                                    //             ? "space-around"
                                    //             : "center",
                                    // }}
                                >
                                    <div>
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
