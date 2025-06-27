import React, { useEffect, useState } from 'react';

function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch('https://fictional-barnacle-69gvx7v7jgvp3x7p-8000.app.github.dev/api/activities/')
      .then(response => response.json())
      .then(data => setActivities(data))
      .catch(error => console.error('Error fetching activities:', error));
  }, []);

  return (
    <div className="card shadow mb-4" style={{ backgroundColor: '#E6E6FA', borderColor: '#B39DDB' }}>
      <div className="card-body">
        <h1 className="card-title mb-4" style={{ color: '#7C4DFF' }}>Activities</h1>
        <div className="table-responsive">
          <table className="table table-striped table-hover align-middle" style={{ backgroundColor: '#F3EFFF' }}>
            <thead style={{ backgroundColor: '#D1C4E9' }}>
              <tr>
                <th style={{ color: '#512DA8' }}>User</th>
                <th style={{ color: '#512DA8' }}>Type</th>
                <th style={{ color: '#512DA8' }}>Duration</th>
              </tr>
            </thead>
            <tbody>
              {activities.map(activity => (
                <tr key={activity._id}>
                  <td>{activity.user}</td>
                  <td>{activity.activity_type}</td>
                  <td>{activity.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Activities;
