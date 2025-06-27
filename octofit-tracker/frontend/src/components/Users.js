import React, { useEffect, useState } from 'react';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://fictional-barnacle-69gvx7v7jgvp3x7p-8000.app.github.dev/api/users/')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div className="card shadow mb-4" style={{ backgroundColor: '#E6E6FA', borderColor: '#B39DDB' }}>
      <div className="card-body">
        <h1 className="card-title mb-4" style={{ color: '#7C4DFF' }}>Users</h1>
        <div className="table-responsive">
          <table className="table table-striped table-hover align-middle" style={{ backgroundColor: '#F3EFFF' }}>
            <thead style={{ backgroundColor: '#D1C4E9' }}>
              <tr>
                <th style={{ color: '#512DA8' }}>Username</th>
                <th style={{ color: '#512DA8' }}>Email</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user._id}>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Users;
