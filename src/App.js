import './App.css';
import { Header } from './components/Header';
import { Inicio1 } from './components/Inicio1';
import { Carousel } from './components/Carousel';
import { Sliderinfinite } from './components/Sliderinfinite';
import { Inicio2 } from './components/Inicio2';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      
      <Header />
      
      <Carousel />

      <Inicio1 />

      <Sliderinfinite />

      <Inicio2 />

      <Footer />

    </div>
  );
}

export default App;
