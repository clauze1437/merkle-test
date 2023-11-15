// AddEditUser.js
import React, { useState, useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

function AddEditUser() {
  const { userID } = useParams();
  const history = useHistory();

  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    // Add other fields based on the API documentation
  });

  const isEditMode = !!userID; // Check if it's in edit mode based on the presence of userID

  useEffect(() => {
    if (isEditMode) {
      // Fetch user data if in edit mode
      axios.get(`https://fakestoreapi.com/users/${userID}`)
        .then(response => {
          setUser(response.data);
        })
        .catch(error => {
          console.error('Error fetching user data:', error);
        });
    }
  }, [isEditMode, userID]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prevUser => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isEditMode) {
        // Update user if in edit mode
        await axios.put(`https://fakestoreapi.com/users/${userID}`, user);
      } else {
        // Add new user if in add mode
        await axios.post('https://fakestoreapi.com/users', user);
      }

      // Redirect to the home page after successful submission
      history.push('/');
    } catch (error) {
      console.error('Error submitting user data:', error);
    }
  };

  return (
    <div>
      <h2>{isEditMode ? 'Edit User' : 'Add User'}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" value={user.username} onChange={handleChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={user.email} onChange={handleChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" value={user.password} onChange={handleChange} />
        </label>
        {/* Add other form fields based on the API documentation */}
        <br />
        <button type="submit">{isEditMode ? 'Update User' : 'Add User'}</button>
      </form>
      <br />
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default AddEditUser;
