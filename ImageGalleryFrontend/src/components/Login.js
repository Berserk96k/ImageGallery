import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';

export default function Login() {
 // State to manage form input values
 const [username, setUsername] = useState('');
 const [password, setPassword] = useState('');
 const [errorMessage, setErrorMessage] = useState(false);
 const [isLoggedIn, setIsLoggedIn] = useState(false); // To track login status

 const handleLogin = () => {
   if (username === 'admin' && password === 'admin') {
     setIsLoggedIn(true); // Set logged-in state to true
   } else {
     setErrorMessage(true); // Show error message on invalid credentials
   }
 };

 if (isLoggedIn) {
   // Redirect to the AdminDashboard after successful login
   return <Navigate to="/admin-dashboard" />;
 }

 return (
   <div className="container">
     <div className="login-container">
       <h3 className="text-center mb-5">Login</h3>
       {errorMessage && (
         <div className="mt-4 pt-2 text-center text-danger">
           Invalid Username or Password!
         </div>
       )}

       <form>
         <div className="mb-3 form-group">
           <label htmlFor="uname">User Name</label>
           <input
             type="text"
             className="form-control"
             id="uname"
             placeholder="Enter user name"
             value={username}
             onChange={(e) => setUsername(e.target.value)}
           />
         </div>
         <div className="form-group mb-3">
           <label htmlFor="upassword">Password</label>
           <input
             type="password"
             className="form-control"
             id="upassword"
             placeholder="Enter user password"
             value={password}
             onChange={(e) => setPassword(e.target.value)}
           />
         </div>

         <button
           type="button"
           className="btn btn-primary w-100"
           onClick={handleLogin}
         >
           Submit
         </button>
       </form>
     </div>
   </div>
 );

}
