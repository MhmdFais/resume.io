import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WelcomeScreen from './components/WelcomeScreen';
import HomeScreen from './components/HomeScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/home" element={<HomeScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
