
import Header from '../src/components/Header';
import Places from '../src/components/PlaceCard/Places'

import "../src/assets/styles/main.scss";

function Home() {
    return <div className="example">
    <Header text="This is test"/>
    <Places />
    </div>;
  }
  
  export default Home;