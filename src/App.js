import React, { Component } from 'react';
import Modal from 'components/ui/Modal';
import Router from './router';
import './App.css';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';


export default class App extends Component {
  render() {
    return (
      <div className="app">
        <main className="app__main" role="main">
          <Router />
        </main>
        <Modal />
      </div>
    );
  }
}
