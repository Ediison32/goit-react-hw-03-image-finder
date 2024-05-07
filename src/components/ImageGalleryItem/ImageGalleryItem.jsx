import React, { Component } from 'react';
import Styles from './imageGalleryItem.module.css';
import PropTypes from 'prop-types';

class ImageGalleryItem extends Component {
  render() {
    const { src, alt, onClick } = this.props;

    return (
      <li className={Styles.ImageGalleryItem} onClick={onClick}>
        <img src={src} alt={alt} className={Styles.ImageGalleryItem_image} />
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;