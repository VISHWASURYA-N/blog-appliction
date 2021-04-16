import './App.css';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import Create from './pages/create';
import BlogDetails from './pages/BlogDetails';
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Switch>
        <div className="content">
      <Route exact path="/" component={Home}/>
      <Route exact path="/create" component={Create}/>
      <Route exact path="/blogs/:id" component={BlogDetails}/>
      </div>
      </Switch>
      </Router>
      </div>
  );
}

export default App;
