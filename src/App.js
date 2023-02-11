import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Homepage from './pages/Homepage';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" component={Homepage} exact />
        {/* <Route path="/coins/:id" component={Coinpage} /> */}
      </div>

    </BrowserRouter>
  );
}

export default App;
