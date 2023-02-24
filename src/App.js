import './App.css';

import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TopicCard from './components/TopicCard';
import About from "./pages/About"
import Navbar from './components/Navbar';
import Header from './components/Header';
import Testimonials from './components/Testimonials';
import Bottom from './components/Bottom';
import Parallax from './components/Parallax'
import Homepage from './pages/Homepage';



function App() {
  return (

  <Router>
    <Switch>
      <div className="App">
        <Route path="/" component={Homepage} exact />

        <Route path="/topiccard" component={TopicCard} exact/>
        <Route path="/about" component={About} exact/>

       
      </div>

    </Switch>
    </Router>

  );
}

export default App;
