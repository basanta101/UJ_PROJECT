import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./Input.module.css";

export default function Input({
  value,
  type,
  onChange,
  id,
  label,
  classes,
  placeholder,
  ...rest
}) {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={id} className={classNames(styles.label, classes.label)}>
        {label}
      </label>
      <input
        value={value}
        type={type}
        onChange={onChange}
        id={id}
        className={classNames(styles.input, classes.input)}
        placeholder={placeholder}
        { ...rest }
      />
    </div>
  );
}

Input.propTypes = {
  value: PropTypes.oneOf['string', 'number'],
  type: PropTypes.string,
  onChange: PropTypes.func,
  id: PropTypes.oneOf["string", "number"],
  label: PropTypes.string,
  placeholder: PropTypes.string,
  classes: PropTypes.instanceOf(Object),
};

Input.defaultProps = {
  value: '',
  type: 'text',
  onChange: (f) => f,
  id: '',
  label: 'label',
  placeholder: '',
  classes: {},
};
