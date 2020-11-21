import React from "react";
import Row from "./Components/Row";
import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";
import requests from "./Files/requests";
import FAQs from "./Components/FAQs";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="app__mainContainer" id="app__mainContainer">
      <Navbar />
      <Banner />
      <div className="videoRows">
        <Row
          title="Netflix Originals"
          Row_id="row__netflixOriginals"
          fetchURL={requests.fetchNetflixOrignals}
          isVerticalAndLargeRow
        />
        <Row
          title="Trending Now"
          Row_id="Row__trending__now"
          fetchURL={requests.fetchTrending}
        />
        <Row
          title="Top Rated"
          Row_id="Row__top__rated"
          fetchURL={requests.fetchTopRated}
        />
        <Row
          title="Action Films"
          Row_id="Row__action__films"
          fetchURL={requests.fetchActionMovies}
        />
        <Row
          title="Comedy Films"
          Row_id="Row__comedy__films"
          fetchURL={requests.fetchComedyMovies}
        />
        <Row
          title="Horror Films"
          Row_id="Row__horror__films"
          fetchURL={requests.fetchHorrorMovies}
        />
        <Row
          title="Romantic Movies"
          Row_id="Row__romantic__movies"
          fetchURL={requests.fetchRomanticMovies}
        />
        <Row
          title="Documentries"
          Row_id="Row__documentries"
          fetchURL={requests.fetchDocumentries}
        />
        <Row
          title=" Ancient "
          Row_id="Row__documentries"
          fetchURL={requests.fetchAncient}
        />
      </div>
      <div className="sectionSeperator"></div>
      <FAQs />
      <Footer />
    </div>
  );
}

export default App;
