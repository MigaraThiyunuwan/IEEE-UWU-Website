import './App.css';
import Awards from './components/Awards';
import Cards from './components/Cards';
import Committee from './components/Committee';
import Description from './components/Description';
import Entities from './components/Entities';
import Events from './components/Events';
import Footer from './components/Footer';
import Getintouch from './components/Getintouch';
import Home from './components/Home';
import Navbar from './components/Navbar';
import WhatIEEE from './components/WhatIEEE';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div id="home">
        <Home/>
      </div>
      <div id="about-us">
        <WhatIEEE/>
      </div>
      <div id="cards">
        <Cards/>
      </div>
      <div id="description">
        <Description/>
      </div>
      <div id="entities">
        <Entities/>
      </div>
      <div id="events">
        <Events/>
      </div>
      <div id="awards">
        <Awards/>
      </div>
      <div id="committee">
        <Committee/>
      </div>
      <div id="getintouch">
        <Getintouch/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
