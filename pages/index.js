
import Header from '../src/components/Header';
import Places from '../src/components/PlaceCard/Places'

import "../src/assets/styles/main.scss";

function Home() {
    return (
      <div className="home-container">
        <Header text=""/>
        <Places />
      </div>
    )
  }
  
  export default Home;
