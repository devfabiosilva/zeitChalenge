/*
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      Olá mundo
    </div>
  );
}

export default App;
*/
import React, { Component } from 'react';
import { Provider } from 'react-redux';
//Provider atualiza todos os estados no componets
import store from './store';
//import MarvelData from './MarvelData';
import Routers from './routers';

class App extends Component {
  componentDidMount = () => {
    //console.log(allHeroes('0'));
  }
  render() {
    return (
      <Provider store={store}>
        <Routers />
      </Provider>
    );
  }
}

export default App;