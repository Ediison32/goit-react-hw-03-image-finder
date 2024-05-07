import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Styles from './searchbar.module.css';

class Searchbar extends Component {
  state = {
    query: ''
  };

  handleChange = (e) => {
    this.setState({ query: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <header className={Styles.Searchbar}>
        <form onSubmit={this.handleSubmit} className={Styles.SearchForm}>
          <button type="submit" className={Styles.SearchForm_button}>
            <span className={Styles.SearchForm_button_label}>Search</span>
          </button>
          <input
            className={Styles.SearchForm_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;