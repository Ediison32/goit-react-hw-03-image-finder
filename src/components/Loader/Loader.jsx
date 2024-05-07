import React, { Component } from 'react';
import { InfinitySpin } from 'react-loader-spinner';

class Spinner extends Component {
  render() {
    return (
      <div className="spinner-container">
        <InfinitySpin
          visible={true}
          width={200}
          color="#4fa94d"
          ariaLabel="infinity-spin-loading"
        />
      </div>
    );
  }
}

export default Spinner;