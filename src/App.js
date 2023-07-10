import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { PlayerCsgo } from './components/Csgo/PlayerCsgo'
import { Index } from './components/Inicio/Index';
import { News } from './components/News/News';
import { Matches } from './components/Matches/Matches';
import { Store } from './components/Store/Store';
import { Jerseys } from './components/Store/Jerseys';
import { Jersey } from './components/Store/Jersey';
import { AboutUs } from './components/AboutUs/AboutUs';


function App() {
  return (
    <div className="App">

      <Header />

      <Router>

        <Routes>
          <Route path='/' Component={Index} />
        </Routes>

        <Routes>
          <Route path='/Csgoteam' Component={PlayerCsgo} />
        </Routes>

        <Routes>
          <Route path='/News' Component={News} />
        </Routes>

        <Routes>
          <Route path='/Matches' Component={Matches} />
        </Routes>

        <Routes>
          <Route path='/Store' Component={Store} />
          <Route path='/Store/Jerseys' Component={Jerseys}/>
          <Route path='/Store/Jerseys/jersey' Component={Jersey} />
        </Routes>

      
        <Routes>
          <Route path='/AboutUs' Component={AboutUs} />
        </Routes> 

      </Router>

      <Footer />

    </div>

  );
}

export default App;
