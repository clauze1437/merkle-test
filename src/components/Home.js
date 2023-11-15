// Home.js
import React, { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';

function Home() {
  const token = localStorage.getItem('token');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const endPoint = 'https://fakestoreapi.com/users';

    axios.get(endPoint)
      .then(response => {
        const apiData = response.data;
        setUsers(apiData);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  const deleteUser = async (userID) => {
    try {
      await axios.delete(`https://fakestoreapi.com/users/${userID}`);
      // Filter out the deleted user from the local state
      const updatedUsers = users.filter(user => user.id !== userID);
      setUsers(updatedUsers);
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  if (!token) {
    return <Navigate to='/' />;
  }

  if (loading) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status"></div>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  return (
    <>
      <div className='row'>
        {users.map((user, i) => (
          <div className='col-12 col-lg-3 col-md-6' key={i}>
            <div className="card card__xtra">
              <div className='card__imgcontainer'>
                {/* Display user avatar or other relevant information */}
              </div>
              <div className="card-body">
                <h5 className="card-title">{user.username}</h5>
                {/* Display other user information as needed */}
                <Link to={`/userDetail/${user.id}`} className="btn btn-success">View detail</Link>
                <button onClick={() => deleteUser(user.id)} className="btn btn-danger">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
