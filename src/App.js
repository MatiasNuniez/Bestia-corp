import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { PlayerCsgo } from './components/Csgo/PlayerCsgo'
import { Index } from './components/Inicio/Index';
import { Staff } from './components/Staff/Staff';

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
          <Route path='/Staff' Component={Staff} />
        </Routes>
{/* 
        <Routes>
          <Route path='/Matches' Component={Matches} />
        </Routes>

        <Routes>
          <Route path='/Store' Component={Store} />
        </Routes>

        <Routes>
          <Route path='/AboutUs' Component={AboutUs} />
        </Routes> */}

      </Router>

      <Footer />

    </div>

  );
}

export default App;
