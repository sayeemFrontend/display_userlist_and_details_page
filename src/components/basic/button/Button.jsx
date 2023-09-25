/* eslint-disable react/button-has-type */

import './Button.css';
import PropTypes from 'prop-types';

export default function Button({ children, title = '', className = '', onClick = () => {} }) {
  return (
    <div tabIndex='0' role='button' aria-pressed='false' onClick={onClick} className={`button ${className}`}>
      <button>{children ? children : title}</button>
    </div>
  );
}

Button.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};
