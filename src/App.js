import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<News key="general" pageSize="5" country="us" category="general" />} />
          <Route exact path="/general" element={<News key="ge" pageSize="5" country="us" category="general" />} />
          <Route exact path="/Space" element={<News key="space" pageSize="5" country="us" category="Space" />} />
          <Route exact path="/Science" element={<News key="science" pageSize="5" country="us" category="Science" />} />
          <Route exact path="/Entertainment" element={<News key="entertainment" pageSize="5" country="us" category="Entertainment" />} />
          <Route exact path="/Politics" element={<News key="politics" pageSize="5" country="us" category="Politics" />} />
          <Route exact path="/Sports" element={<News key="sports" pageSize="5" country="us" category="Sports" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;