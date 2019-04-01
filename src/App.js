import React, { Component } from 'react';
import './App.css';
import InputNote from './component/InputNote/InputNote';
import ListItem from './component/ListItem/ListItem';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      list: [],
    }
  }

  submit = (v) => {
    const listArr = this.state.list
    listArr.push(v)

    this.setState ({
      list: listArr,
    })
  }

  remove = (index) => {
    const listArr = this.state.list
    listArr.splice(index, 1);

    this.setState ({
      list: listArr,
    })
  }

  render() {
    return (
      <div className="App">
        <InputNote submit = { this.submit } textValue = ''/>
        <ListItem list = {this.state.list} remove = { this.remove }/>
      </div>
    );
  }
}

export default App;
