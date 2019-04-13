import React, { Component } from 'react';
import './index.css';
import TopNav from './Components/TopNav/TopNav';
import BottomNav from './Components/BottomNav/BottomNav';
import MainContent from './Components/MainContent/MainContent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNav />
        <MainContent/>
        <BottomNav />
      </div>
    );
  }
}

export default App;
