// UserDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function UserDetail() {
  const { userID } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const endPoint = `https://fakestoreapi.com/users/${userID}`;

    axios.get(endPoint)
      .then(response => {
        const userData = response.data;
        setUser(userData);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
        setLoading(false);
      });
  }, [userID]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status"></div>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  return (
    <div>
      <h2>User Details</h2>
      <p>Email: {user.email}</p>
      <p>Username: {user.username}</p>
      <p>Password: {user.password}</p>
      <p>Name: {user.name.firstname} {user.name.lastname}</p>
      {/* Add other user details as needed */}
    </div>
  );
}

export default UserDetail;
