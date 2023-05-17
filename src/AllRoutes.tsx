import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {UserProfile} from './components/UserProfile';
import {About} from './components/About';

export default function AllRoutes() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<UserProfile />} />
          <Route path="/about" element={<About />} />
        </Routes>
    </Router>
  );
}
