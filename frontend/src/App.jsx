import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', email: '' }); // State for the new user
  const [loading, setLoading] = useState(true);
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4002/api';
  console.log(API_URL)

  useEffect(() => {
    fetchUsers();
  }, []);

  // Function to fetch all users from the backend
  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${API_URL}/users`);
      setUsers(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching users:', error);
      setLoading(false);
    }
  };

  // Function to handle form submission
  const handleAddUser = async (e) => {
    e.preventDefault();

    // Check if both fields are filled
    if (!newUser.name || !newUser.email) {
      alert('Please fill in both name and email');
      return;
    }

    try {
      const response = await axios.post(`${API_URL}/users`, newUser);
      setUsers((prevUsers) => [...prevUsers, response.data]); // Add new user to the list
      setNewUser({ name: '', email: '' }); // Reset the form
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  return (
    <div>
      <h1>Users List</h1>

      {/* Display loading spinner while fetching */}
      {loading ? <p>Loading users...</p> : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name} - {user.email}</li>
          ))}
        </ul>
      )}

      <h2>Add New User</h2>
      <form onSubmit={handleAddUser}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          />
        </div>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}

export default App;
