import React, { Component } from 'react';
import Nav from './nav';
import Footer from './footer';

export default class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="container col-center col-md-8">
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}
