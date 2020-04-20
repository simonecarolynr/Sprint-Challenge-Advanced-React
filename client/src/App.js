import React from 'react';
import AllPlayers from './AllPlayers';
import './App.css';
import useDarkMode from './hooks/useDarkMode';

function App () {


    const [darkMode, setDarkMode] = useDarkMode(false);

    const toggleMode = e => {
      e.preventDefault();
      setDarkMode(!darkMode);
    };

    return (
      <div className="App">
        <h1>Most Popular Women's World Cup Soccer Players</h1>
            <div  onClick={toggleMode} className="dark-mode_toggle">
              <div className={darkMode ? 'toggle toggled' : 'toggle'} />
            </ div>
            <div>
              <AllPlayers/>
            </div> 
      </div>
    );

};

export default App;
