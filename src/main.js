import React from 'react';
import ReactDOM from 'react-dom';
import Row from './Components/Row'
import requests from './requests'
import Banner from './Components/Banner'
import './index.css';

import * as serviceWorker from './serviceWorker';

function RootApp() {
  return (
    <div className="App-Main-UI-Container">
      {/* babel src/main.js --out-file=src/index.js --presets=react,env --watch */}

          {/* NavBar */}

          {/* Banner */}

          <Banner />

          <Row title='Netflix Orignals' fetchURL={requests.fetchNetflixOrignals} isVerticalAndLargeRow />
          <Row title='Trending Now' fetchURL={requests.fetchTrending}  />
          <Row title='Top Rated' fetchURL={requests.fetchTopRated} />
          <Row title='Action Films' fetchURL={requests.fetchActionMovies} />
          <Row title='Comedy Films' fetchURL={requests.fetchComedyMovies} />
          <Row title='Horror Films' fetchURL={requests.fetchHorrorMovies} />
          <Row title='Romantic Movies' fetchURL={requests.fetchRomanticMovies} />
          <Row title='Documentries' fetchURL={requests.fetchDocumentries} />
    </div>
  );
}

let RootDirectory = document.getElementById('Root')

ReactDOM.render(<RootApp />, RootDirectory);

serviceWorker.register();
