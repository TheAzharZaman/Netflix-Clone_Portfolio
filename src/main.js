import React from 'react';
import ReactDOM from 'react-dom';
import Row from './Components/Row'
import requests from './requests'
import Banner from './Components/Banner'
import Navbar from './Components/Navbar'
import './index.css';

import * as serviceWorker from './serviceWorker';

function RootApp() {
  return (
    <div className="App-Main-UI-Container">
      {/* babel src/main.js --out-file=src/index.js --presets=react,env --watch */}

          <Navbar />
          <Banner />

          <Row title='Netflix Originals' Row_id='Row__netflix__originals' fetchURL={requests.fetchNetflixOrignals} isVerticalAndLargeRow />
          <Row title='Trending Now' Row_id='Row__trending__now' fetchURL={requests.fetchTrending}  />
          <Row title='Top Rated' Row_id='Row__top__rated' fetchURL={requests.fetchTopRated} />
          <Row title='Action Films' Row_id='Row__action__films' fetchURL={requests.fetchActionMovies} />
          <Row title='Comedy Films' Row_id='Row__comedy__films' fetchURL={requests.fetchComedyMovies} />
          <Row title='Horror Films' Row_id='Row__horror__films' fetchURL={requests.fetchHorrorMovies} />
          <Row title='Romantic Movies' Row_id='Row__romantic__movies' fetchURL={requests.fetchRomanticMovies} />
          <Row title='Documentries' Row_id='Row__documentries' fetchURL={requests.fetchDocumentries} />
          <Row title=' Ancient ' Row_id='Row__documentries' fetchURL={requests.fetchAncient} />
          <Row title='Documentries 2' Row_id='Row__documentries' fetchURL={requests.fetchUnknown2} />
    </div>
  );
}

let RootDirectory = document.getElementById('Root')

ReactDOM.render(<RootApp />, RootDirectory);

serviceWorker.register();
