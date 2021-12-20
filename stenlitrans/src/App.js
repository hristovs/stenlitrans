import Navbar from './Navbar';
import Home from './Home';
import  './index.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AboutUs from './AboutUs';
import BlogDetails from './BlogDetails';
import { Parallax } from 'react-parallax';
import truck from './truck.jpeg'

function App() {

  return (
    <Router>
    <div className="App">
    <div className="content">
     <Switch>
        <Route exact path="/">
        <Navbar />
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
