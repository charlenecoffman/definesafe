import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProfile } from './UserProfile';
import { Medications } from './Medications';
import { Dashboard } from './Dashboard';
import { PlanContainer } from './PlanContainer';
import { Settings } from './Settings';

export default function AllRoutes() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/plan" element={<PlanContainer />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/medications" element={<Medications />} />
        </Routes>
    </Router>
  );
}
