import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

function RootApp() {
  return (
    <div className="App-Main-UI-Container">
      {/* babel src/main.js --out-file=src/index.js --presets=react,env --watch */}

      <h1 className='Booster'>lETS go and build Netflix App with Clever Programmers ⚡⚡⚡</h1>

    </div>
  );
}

let RootDirectory = document.getElementById('Root')

ReactDOM.render(<RootApp />, RootDirectory);

serviceWorker.register();
