import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/"> <News key="general" pageSize="5" country="us" category="general" /> </Route>
          <Route exact path="/general"> <News key="ge" pageSize="5" country="us" category="general" /> </Route>
          <Route exact path="/Space"> <News key="space" pageSize="5" country="us" category="Space" /> </Route>
          <Route exact path="/Science"> <News key="science" pageSize="5" country="us" category="Science" /> </Route>
          <Route exact path="/Entertainment"> <News key="entertainment" pageSize="5" country="us" category="Entertainment" /> </Route>
          <Route exact path="/Politics"> <News key="politics" pageSize="5" country="us" category="Politics" /> </Route>
          <Route exact path="/Sports"> <News key="sports" pageSize="5" country="us" category="Sports" /> </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;