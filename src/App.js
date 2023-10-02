import logo from './logo.svg';
import './App.css';
import HomePage from './components/screens/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
  <Router>
    <Routes>
      <Route path='/' element={<HomePage/>} />
    </Routes>
  </Router>
  );
}

export default App;
