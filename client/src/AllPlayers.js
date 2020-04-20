import React from 'react';
import axios from 'axios';
import Players from './Players';
import './App.css';

class AllPlayers extends React.Component {
  constructor() {
    super();

    this.state = {
     players: []
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/players')
      .then(response => {

        this.setState({
          players: response.data

        })
      })
      .catch(error => {
        console.log(error)
      })
  }
  
  render() {
    return (
        <div>
        {this.state.players.map((player, i) => {
          return (
            <div key={i}>
              <Players
                name={player.name}
                country={player.country}
                searches={player.searches}
                key={i} 
              />
            </div> 
          )
        })}
        </div>
    );
  };

};

export default AllPlayers;
