import "../styles/nav.css";
import PropTypes from "prop-types";

Nav.propTypes = {
	setCity: PropTypes.func,
};

function Nav() {
	return (
		<nav>
			{/* <select id="tempUnit">
				<option value="C">°C</option>
				<option value="F">°F</option>
			</select> */}
			<div>LOGO</div>
			<div>Menu</div>
		</nav>
	);
}

export default Nav;
