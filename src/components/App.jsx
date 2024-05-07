import React, { Component } from 'react';
import axios from 'axios';
import Searchbar from './Searchbar/Searchbar.jsx';
import ImageGallery from './ImageGallery/ImageGallery.jsx';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem.jsx';
import Button from './Button/Button.jsx';
import Loader from './Loader/Loader.jsx';
import Modal from './Modal/Modal.jsx';
import Styles from './app.module.css';


class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    loading: false,
    showModal: false,
    largeImageURL: '',
  };

  handleSubmit = query => {
    this.setState({ query, images: [], page: 1 }, this.fetchImages);
  };

  fetchImages = () => {
    const { query, page } = this.state;
    const apiKey = '40998850-21238c0a5b68611eff0d55619';
    const url = `https://pixabay.com/api/?q=${query}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`;

    this.setState({ loading: true });

    axios
      .get(url)
      .then(response => {
        this.setState(prevState => ({
          images: [...prevState.images, ...response.data.hits],
          page: prevState.page + 1,
        }));
      })
      .catch(error => console.error('Error fetching images:', error))
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  handleLoadMore = async () => {
    console.log('hola');
    await this.fetchImages();
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  handleImageClick = largeImageURL => {
    console.log('Que hay aqui');
    this.setState({ showModal: true, largeImageURL: largeImageURL });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false, largeImageURL: '' });
  };

  render() {
    const { images, loading, showModal, largeImageURL } = this.state;

    return (
      <div className={Styles.App}>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery>
          {images.map(image => (
            <ImageGalleryItem
              key={image.id}
              src={image.webformatURL}
              alt={image.tags}
              onClick={() => {
                console.log('Se está llamando a handleImageClick');
                this.handleImageClick(image.largeImageURL);
              }}
            />
          ))}
        </ImageGallery>
        <div className={Styles.Button_container}>
          {loading && <Loader />}
          {images.length > 0 && !loading && (
            <Button onClick={this.handleLoadMore} />
          )}
          {showModal && (
            <Modal
              onClose={this.handleCloseModal}
              largeImageURL={largeImageURL}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;