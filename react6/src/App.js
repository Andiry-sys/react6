import './App.css';
import React from 'react';

function App() {
  return (
    <>
      <RandomClass />
    </>
  );
}

class RandomClass extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      min: props.min,
      max: props.max,
      random: [],
    };
    
  }

  setMin(min) {
    this.setState({ min: min });
  }

  setMax(max) {
    this.setState({ max: max });
  }

  handleClick() {
    this.setState({
      random:
        Math.floor(Math.random() * (this.state.max - this.state.min + 1)) +
        this.state.min,
    });console.log(this.state.random);
  }

  

  render() {
    return (
      <div>
        <input
          type={'number'}
          value={this.state.min}
          placeholder="Enter min number"
          onChange={this.setMin}
          required
        />

        <input
          type={'number'}
          value={this.state.max}
          placeholder="Enter max number"
          onChange={this.setMax}
          required
        />
        <p>Random{this.state.random}</p>

        <button onClick={this.handleClick}>Generate random number</button>
      </div>
    );
  }
}

export default App;
