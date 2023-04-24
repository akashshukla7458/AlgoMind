import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TopicCard from './components/TopicCard';
import About from "./pages/About"
import Homepage from './pages/Homepage';
import Questions from './components/Questions';
import QuestionData from './services/QuestionData'
import Login from './auth/Login';
import  Alert  from './components/Alert';
import Userpage from './auth/Userpage';

function App() {
  const topics = [...new Set(QuestionData.map((q) => q.topicName))];
  // copy of master for backup
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" component={Homepage} exact />
          <Route path="/topiccard" component={TopicCard} exact />
          <Route path="/about" component={About} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/Userpage" component={Userpage} exact />
          
          {topics.map((topic, index) => (
            <Route key={index} path={`/${topic}`}>
              <Questions topicName={topic} questions={QuestionData.filter((q) => q.topicName === topic)} />
            </Route>
          ))}

          <Route path="*">
            <h1>Page not found</h1>
          </Route>
        </Switch>
        <Alert/>
      </div>
    </Router>
  );
}

export default App;
