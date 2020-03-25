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
import MarvelData from './MarvelData';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <MarvelData />
      </Provider>
    );
  }
}

export default App;