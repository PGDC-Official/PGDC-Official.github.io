import PropTypes from "prop-types";

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

function Button({ children, onClick }) {
  return (
    <button className="button-54" role="button" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
