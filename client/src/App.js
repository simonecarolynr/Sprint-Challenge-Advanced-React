import React from 'react';
import axios from 'axios';
import Players from './Players';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      country: '',
      searches: '',
      id: ''
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/players')
      .then(response => {
        console.log(response.data)
        let player = response.data[0];

        this.setState({
          name: player.name,
          country: player.country,
          searches: player.searches,
          id: player.id

        })
      })
      .catch(error => {
        console.log(error)
      })
  }
  
  render() {
    return (
      <div className="App">
        <Players
          name={this.state.name}
          country={this.state.country}
          searches={this.state.searches}
          id={this.state.id} 
          />
      </div>
    )

  }


}

export default App;
