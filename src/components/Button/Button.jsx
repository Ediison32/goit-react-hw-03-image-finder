import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Styles from './button.module.css';

class Button extends Component {
    render() {
      const { onClick } = this.props;
  
      return (
        <button type="button" onClick={onClick} className={Styles.Button}>
          Load more
        </button>
      );
    }
  }
  
  Button.propTypes = {
    onClick: PropTypes.func.isRequired,
  };
  
  export default Button;