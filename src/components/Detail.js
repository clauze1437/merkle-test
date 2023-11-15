// // Detalle.js
// import React, { useEffect, useState } from 'react';
// import { Navigate, Link } from 'react-router-dom';
// import axios from 'axios';
// import Header from './Header';
// import UserDetail from './UserDetail';

// function Detalle() {
//   const token = localStorage.getItem('token');
//   const [productDetalle, setProductDetalle] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [users, setUsers] = useState(null);

//   let query = new URLSearchParams(window.location.search);
//   let productID = query.get('productID');

//   useEffect(() => {
//     const productEndPoint = `https://fakestoreapi.com/products/${productID}`;
//     axios.get(productEndPoint)
//       .then(response => {
//         const productData = response.data;
//         setProductDetalle(productData);
//         setLoading(false);
//       });

//   }, [productID]);

//   const fetchUsers = () => {
//     const userEndPoint = 'https://fakestoreapi.com/users';
//     axios.get(userEndPoint)
//       .then(response => {
//         const usersData = response.data;
//         setUsers(usersData);
//       });
//   };

//   return (
//     <>
//       {!token && <Navigate to='/' />}

//       <div className='header__mb'>
//         <Header />
//       </div>

//       <br /><br />

//       {!productDetalle && !loading &&
//         <>
//           <div className="d-flex justify-content-center">
//             <div className="spinner-border" role="status"></div>
//           </div>
//           <span className="sr-only">Loading...</span>
//         </>
//       }

//       {productDetalle &&
//         <>
//           <div className='detalle__contenedor'>
//             <img src={productDetalle.image} alt={productDetalle.title} className='detalle__poster' />
//             <div className='detalle__desc'>
//               <h2>{productDetalle.title}</h2>
//               <h3>${productDetalle.price}.-</h3>
//               <br />
//               <h5>Description:</h5>
//               <p>{productDetalle.description}</p>
//               <button onClick={fetchUsers} className="btn btn-primary">Fetch Users</button>
//               {users && users.map(user => (
//                 <Link to={`/userDetail?userID=${user.id}`} key={user.id} className="btn btn-success">
//                   View User Detail
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </>
//       }

//       {users &&
//         users.map(user => (
//           <UserDetail key={user.id} user={user} />
//         ))
//       }

//     </>
//   );
// }

// export default Detalle;
