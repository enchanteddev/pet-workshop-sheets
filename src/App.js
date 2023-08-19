// import './App.css';
import { React} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Nav from './components/Nav'
import Event1 from './components/Event1';
import Event2 from './components/Event2';
import Event3 from './components/Event3';
import Event4 from './components/Event4';
const App = () => {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/Event1" element={<Event1 />} />
          <Route exact path="/Event2" element={<Event2 />} />
          <Route exact path="/Event3" element={<Event3 />} />
          <Route exact path="/Event4" element={<Event4 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
