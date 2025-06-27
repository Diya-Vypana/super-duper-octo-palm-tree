
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';
const logoUrl = process.env.PUBLIC_URL + '/octofitapp-small.png';

function App() {
  return (
    <Router>
      <div className="App" style={{ backgroundColor: '#E6E6FA', minHeight: '100vh' }}>
        <nav className="navbar navbar-expand-lg mb-4 shadow" style={{ backgroundColor: '#B39DDB' }}>
          <div className="container-fluid">
            <Link className="navbar-brand d-flex align-items-center" to="/" style={{ color: '#512DA8' }}>
              <img
                src={process.env.PUBLIC_URL + '/octofitapp-small.png'}
                alt="OctoFit Logo"
                className="octofit-logo"
                style={{ height: '40px', marginRight: '16px' }}
              />
              OctoFit Tracker
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/activities" style={{ color: '#512DA8' }}>Activities</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/leaderboard" style={{ color: '#512DA8' }}>Leaderboard</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/teams" style={{ color: '#512DA8' }}>Teams</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/users" style={{ color: '#512DA8' }}>Users</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/workouts" style={{ color: '#512DA8' }}>Workouts</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container">
          <Routes>
            <Route path="/" element={
              <div className="mt-5">
                <h1 className="mb-4" style={{ color: '#7C4DFF' }}>Welcome to OctoFit Tracker</h1>
                <p className="lead" style={{ color: '#512DA8' }}>Track your fitness activities, join teams, and climb the leaderboard!</p>
              </div>
            } />
            <Route path="/activities" element={<Activities />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/users" element={<Users />} />
            <Route path="/workouts" element={<Workouts />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
