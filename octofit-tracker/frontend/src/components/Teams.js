import React, { useEffect, useState } from 'react';

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('https://fictional-barnacle-69gvx7v7jgvp3x7p-8000.app.github.dev/api/teams/')
      .then(response => response.json())
      .then(data => setTeams(data))
      .catch(error => console.error('Error fetching teams:', error));
  }, []);

  return (
    <div className="card shadow mb-4" style={{ backgroundColor: '#E6E6FA', borderColor: '#B39DDB' }}>
      <div className="card-body">
        <h1 className="card-title mb-4" style={{ color: '#7C4DFF' }}>Teams</h1>
        <div className="table-responsive">
          <table className="table table-striped table-hover align-middle" style={{ backgroundColor: '#F3EFFF' }}>
            <thead style={{ backgroundColor: '#D1C4E9' }}>
              <tr>
                <th style={{ color: '#512DA8' }}>Name</th>
                <th style={{ color: '#512DA8' }}>Members</th>
              </tr>
            </thead>
            <tbody>
              {teams.map(team => (
                <tr key={team._id}>
                  <td>{team.name}</td>
                  <td>{team.members && team.members.map(m => m.username).join(', ')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Teams;
