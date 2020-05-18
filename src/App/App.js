import React from 'react';
import './App.scss';

import Auth from '../components/Auth/Auth';
import BoardContainer from '../components/BoardContainer/BoardContainer';
import MyNavbar from '../components/MyNavbar/MyNavbar';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h2>INSIDE APP COMPONENT</h2>
        <button className="btn btn-dark">REACT PINTEREST BUTTON CHECK</button>
        <MyNavbar/>
        <Auth/>
        <BoardContainer/>
      </div>
    );
  }
}

export default App;
