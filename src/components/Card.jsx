import "../styles/card.css";
import PropTypes from "prop-types";

Card.propTypes = {
    children: PropTypes.object.isRequired,
};

function Card({ children }) {
    return <div className="card">{children}</div>;
}

export default Card;
