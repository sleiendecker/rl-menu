import React from 'react';

import MenuSelect from '../../components/MenuSelect/MenuSelect';

import '../../index.css'
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div className="menu">
          <MenuSelect/>
        </div>
      </header>
    </div>
  );
}

export default App;
