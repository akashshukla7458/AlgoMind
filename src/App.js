import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TopicCard from './components/TopicCard';
import About from "./pages/About"
import Homepage from './pages/Homepage';
import Questions from './components/Questions';
import QuestionData from './services/QuestionData'

function App() {
  const topics = [...new Set(QuestionData.map((q) => q.topicName))];
  
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" component={Homepage} exact />
          <Route path="/topiccard" component={TopicCard} exact />
          <Route path="/about" component={About} exact />
          
          {topics.map((topic, index) => (
            <Route key={index} path={`/${topic}`}>
              <Questions topicName={topic} questions={QuestionData.filter((q) => q.topicName === topic)} />
            </Route>
          ))}

          <Route path="*">
            <h1>Page not found</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
