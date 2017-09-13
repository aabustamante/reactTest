import React, { Component } from 'react';
import Row from './components/row'

class App extends Component {
  render() {
    return (
      <div className="App">
          <table>
            <tbody>
            <Row/>
            </tbody>
          </table>
      </div>
    );
  }
}

export default App;
