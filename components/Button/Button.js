import classNames from "classnames";
import PropTypes from 'prop-types';
import styles from "./Button.module.css";

export default function Button({ label, onClick, classes }) {
  return (
    <button
      onClick={onClick}
      className={classNames(styles.button, classes.button)}
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  classes: PropTypes.instanceOf(Object),
}

Button.defaultProps = {
  label: 'Button',
  onClick: (f) => f,
  classes: {},
}