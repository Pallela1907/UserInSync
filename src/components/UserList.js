import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [editUser, setEditUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch users
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get(`https://reqres.in/api/users?page=${page}`);
      setUsers(response.data.data);
      setTotalPages(response.data.total_pages); // Total pages information
    };
    fetchUsers();
  }, [page]);

  // Handle edit
  const handleEdit = (user) => {
    setEditUser(user);
    alert('Scroll to the end to edit the user!');
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://reqres.in/api/users/${editUser.id}`, {
        first_name: editUser.first_name,
        last_name: editUser.last_name,
        email: editUser.email,
      });
      alert('User updated successfully!');
      setEditUser(null);
    } catch (err) {
      alert('Failed to update user.');
    }
  };

  // Handle delete
  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://reqres.in/api/users/${id}`);
      alert('User deleted successfully!');
      setUsers(users.filter((user) => user.id !== id));
    } catch (err) {
      alert('Failed to delete user.');
    }
  };

  return (
    <div className="container">
      <header className="header">
        <h1>User List</h1>
      </header>
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {users
          .filter(
            (user) =>
              user.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              user.last_name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((user) => (
            <div key={user.id} className="card" style={{ width: '200px', textAlign: 'center' }}>
              <img src={user.avatar} alt={user.first_name} style={{ width: '80px', height: '80px' }} />
              <h3>
                {user.first_name} {user.last_name}
              </h3>
              <p>{user.email}</p>
              <button onClick={() => handleEdit(user)} style={{ marginRight: '10px' }}>
                Edit
              </button>
              <button
                onClick={() => handleDelete(user.id)}
                style={{ backgroundColor: '#dc3545', color: '#fff' }}
              >
                Delete
              </button>
            </div>
          ))}
      </div>
      {editUser && (
        <div className="card" style={{ marginTop: '20px' }}>
          <h2>Edit User</h2>
          <form onSubmit={handleUpdate}>
            <input
              type="text"
              value={editUser.first_name}
              onChange={(e) => setEditUser({ ...editUser, first_name: e.target.value })}
              placeholder="First Name"
            />
            <input
              type="text"
              value={editUser.last_name}
              onChange={(e) => setEditUser({ ...editUser, last_name: e.target.value })}
              placeholder="Last Name"
            />
            <input
              type="email"
              value={editUser.email}
              onChange={(e) => setEditUser({ ...editUser, email: e.target.value })}
              placeholder="Email"
            />
            <button type="submit" style={{ backgroundColor: '#28a745', color: '#fff' }}>
              Update
            </button>
            <button
              onClick={() => setEditUser(null)}
              style={{ backgroundColor: '#dc3545', color: '#fff', marginLeft: '10px' }}
            >
              Cancel
            </button>
          </form>
        </div>
      )}
      <div className="pagination">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          style={{ backgroundColor: '#007BFF', color: '#fff' }}
        >
          Previous
        </button>
        <button
          onClick={() => {
            if (page < totalPages) {
              setPage((prev) => prev + 1);
            } else {
              alert('List Exhausted!');
            }
          }}
          disabled={page === totalPages}
          style={{ backgroundColor: '#007BFF', color: '#fff' }}
        >
          {page === totalPages ? 'List Exhausted!' : 'Next'}
        </button>
      </div>
    </div>
  );
};

export default UserList;
