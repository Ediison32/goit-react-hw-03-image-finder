import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Styles from './modal.module.css';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
    render() {
      const { onClose, largeImageURL } = this.props;
  
      return (
        <div className={Styles.Overlay} onClick={onClose}>
          <div className={Styles.Modal}>
            <img src={largeImageURL} alt="" className={Styles.Modal_img}/>
          </div>
        </div>
      );
    }
  }
  
  Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  };
  
  export default Modal;