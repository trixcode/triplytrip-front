
import Header from '../src/components/Header';

import "../src/assets/styles/main.scss";
import News from '../src/components/News';
import Discover from '../src/components/Discover';

function Home() {
    return <div className="example">
    <Header text="This is test"/>
    <Discover />
    <News />
    </div>;
  }
  
  export default Home;