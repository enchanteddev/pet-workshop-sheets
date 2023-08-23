// import './App.css';
import { React} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Nav from './components/Nav'
import Table from './components/Table';
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="*" element={<Nav />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
