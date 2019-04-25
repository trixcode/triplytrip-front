
import Header from '../src/components/Header';
import Places from '../src/components/PlaceCard/Places'
import Subscribe from '../src/components/Subscribe/Subscribe'
import "../src/assets/styles/main.scss";

function Home() {
    return (
      <div className="home-container">
        <Header text=""/>
        <Places />
        <Subscribe />
      </div>
    )
  }
  
  export default Home;
