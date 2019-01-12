import React, { Component } from 'react';
import BandList from './band-list';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <h4>Check out these great bands!</h4>
      <BandList
        genre="Southern Rock"
        bands={[
          "Creedence Clearwater Revival",
          "Lynard Skynard",
          "The Allman Brothers"
        ]}
      />
      <BandList
        genre="Progressive Rock"
        bands={["Rush", "Styx", "Coheed and Cambria"]}
      />
      </div>
    );
  }
}

export default App;
