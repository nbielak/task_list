import React, { Component } from 'react';
import logo from './logo.svg';
import {HashRouter} from 'react-router-dom';
import Root from './components/root';
import './App.css';

const App = () => (
  <HashRouter>
    <Root />
  </HashRouter>
)

export default App;
