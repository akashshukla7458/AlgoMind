import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Testimonials from './components/Testimonials';
import Bottom from './components/Bottom';
import Parallax from './components/Parallax'
import Homepage from './pages/Homepage';
import About from './pages/About';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" component={Homepage} exact />
        <Route path="/About" component={About} />
        {/* <Route path="/coins/:id" component={Coinpage} /> */}
      </div>

    </BrowserRouter>
  );
}

export default App;
