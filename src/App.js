import { createStore } from 'redux'
import React, { Component } from 'react';
import './App.css';
import Board from './Board/Board'


class App extends Component {
  render() {

      const reducer = (state={} , action) => {
        return state
      }
      const store = createStore(reducer)
      store.subscribe(()=>{
        console.log(store.getState())
      })

      store.dispatch({type: 'something'})
      
        return (
        <div className="App">
          <Board />
        </div>
      );
  }
}
export default App;
