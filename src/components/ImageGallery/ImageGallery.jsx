import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Styles from './imageGallery.module.css';

class ImageGallery extends Component {
    render() {
      const { children } = this.props;
  
      return (
        <ul className={Styles.ImageGallery}>
          {children}
        </ul>
      );
    }
  }
  
  ImageGallery.propTypes = {
    children: PropTypes.node.isRequired,
  };
  
  export default ImageGallery;