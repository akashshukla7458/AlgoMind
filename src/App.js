import './App.css';
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './pages/Homepage';
import TopicCard from './components/TopicCard';
import About from "./pages/About"


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
