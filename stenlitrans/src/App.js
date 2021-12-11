import Navbar from './Navbar';
import Home from './Home';
import  './index.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AboutUs from './AboutUs';
import BlogDetails from './BlogDetails';
function App() {

  return (
    <Router>
    <div className="App">
    <div className="content">
     <Navbar />
     <Switch>
        <Route exact path="/"> 
          <Home />
        </Route>
        <Route path="/aboutus"> 
          <AboutUs />
        </Route>
        <Route path="/blogdetails/:id"> 
          <BlogDetails />
        </Route>
     </Switch>
    </div>
    </div>
    </Router>
  );
}

export default App;
