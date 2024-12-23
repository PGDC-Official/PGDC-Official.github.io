import PropTypes from "prop-types";

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  otherClasses: PropTypes.string,
  styles: PropTypes.object,
};

function Button({ children, onClick, otherClasses, styles }) {
  return (
    <button className={`button-54 ${otherClasses}`} role="button" onClick={onClick} style={styles}>
      {children}
    </button>
  );
}

export default Button;
