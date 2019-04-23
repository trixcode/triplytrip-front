
import Header from '../src/components/Header';

import "../src/assets/styles/main.scss";
import News from '../src/components/News';

function Home() {
    return <div className="example">
    <Header text="This is test"/>
    <News />
    </div>;
  }
  
  export default Home;