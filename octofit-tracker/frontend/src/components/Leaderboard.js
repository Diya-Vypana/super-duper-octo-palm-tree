import React, { useEffect, useState } from 'react';

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    fetch('https://fictional-barnacle-69gvx7v7jgvp3x7p-8000.app.github.dev/api/leaderboard/')
      .then(response => response.json())
      .then(data => setLeaderboard(data))
      .catch(error => console.error('Error fetching leaderboard:', error));
  }, []);

  return (
    <div className="card shadow mb-4" style={{ backgroundColor: '#E6E6FA', borderColor: '#B39DDB' }}>
      <div className="card-body">
        <h1 className="card-title mb-4" style={{ color: '#7C4DFF' }}>Leaderboard</h1>
        <div className="table-responsive">
          <table className="table table-striped table-hover align-middle" style={{ backgroundColor: '#F3EFFF' }}>
            <thead style={{ backgroundColor: '#D1C4E9' }}>
              <tr>
                <th style={{ color: '#512DA8' }}>Username</th>
                <th style={{ color: '#512DA8' }}>Score</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map(entry => (
                <tr key={entry._id}>
                  <td>{entry.user && entry.user.username}</td>
                  <td>{entry.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;
