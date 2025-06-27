import React, { useEffect, useState } from 'react';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch('https://fictional-barnacle-69gvx7v7jgvp3x7p-8000.app.github.dev/api/workouts/')
      .then(response => response.json())
      .then(data => setWorkouts(data))
      .catch(error => console.error('Error fetching workouts:', error));
  }, []);

  return (
    <div className="card shadow mb-4" style={{ backgroundColor: '#E6E6FA', borderColor: '#B39DDB' }}>
      <div className="card-body">
        <h1 className="card-title mb-4" style={{ color: '#7C4DFF' }}>Workouts</h1>
        <div className="table-responsive">
          <table className="table table-striped table-hover align-middle" style={{ backgroundColor: '#F3EFFF' }}>
            <thead style={{ backgroundColor: '#D1C4E9' }}>
              <tr>
                <th style={{ color: '#512DA8' }}>Name</th>
                <th style={{ color: '#512DA8' }}>Description</th>
              </tr>
            </thead>
            <tbody>
              {workouts.map(workout => (
                <tr key={workout._id}>
                  <td>{workout.name}</td>
                  <td>{workout.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Workouts;
