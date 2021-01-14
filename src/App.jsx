import React, { Component } from 'react';
import './App.css';

import Movies from "./Component/movies";
// import Comment from './Component/comment'


class App extends Component {
  render() {
    return (
      <div style={{boxSizing:"border-box", marginTop:'0px'}} className="App">
        <h1 style={{backgroundColor:'lightgrey', padding: '10px'}}>Top 250 as rated by IMDb Users</h1>
        <Movies title='Pulp Fiction' year='1994' rating=' 8.8' />

        <Movies title='Goodfellas' year='1990' rating=' 8.6' />
        <Movies title='One Flew Over the Cuckoos Nest' year='1975' rating=' 8.6' />
        <Movies title='The Departed' year='2006' rating=' 8.5' />
        <Movies title='Apocalypse' year='1979' rating=' 8.4' />

        <footer style={{ backgroundColor: 'blue', height: '50px', color: 'white', fontSize: '1.5rem', paddingTop: '10px' }}>

          I hope you like this list
</footer>
      </div>
    );
  }
}

export default App;
