// import { useRef } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from '../axiosConfig';

// function Login() {
//   const navigate = useNavigate();
//   const emailRef = useRef();
//   const passwordRef = useRef();

//   async function handleSubmit(event) {
//     event.preventDefault();

//     const email = emailRef.current.value;
//     const password = passwordRef.current.value;

//     if (!email || !password) {
//       alert('Please provide both email and password');
//       return;
//     }

//     try {
//       const response = await axios.post('/users/login', {
//         email,
//         password,
//       });

//       localStorage.setItem('token', response.data.token);
//       alert('Login successful');
//       navigate('/');
//     } catch (error) {
//       const errorMessage = error.response?.data?.msg || 'An error occurred during login';
//       alert(errorMessage);
//     }
//   }

//   return (
//     <section>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Email: </label>
//           <input
//             ref={emailRef}
//             type="email"
//             placeholder="Enter your email"
//             required
//           />
//         </div>
//         <div>
//           <label>Password: </label>
//           <input
//             ref={passwordRef}
//             type="password"
//             placeholder="Enter your password"
//             required
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//       <Link to="/register">Register</Link>
//     </section>
//   );
// }

// export default Login;








// // import {useRef} from 'react';
// // import { Link, useNavigate } from 'react-router-dom';

// // import axios from '../axiosConfig';

// // function Login() {
// //   const navigate = useNavigate();
// //   const emailDom = useRef();
// //   const passwordDom = useRef();

// //   async function handleSubmit(e) {
// //     e.preventDefault();
    
// //     const emailValue = emailDom.current.value;
// //     const passValue = passwordDom.current.value;
// //     if (
      
// //       !emailValue ||
// //       !passValue 
// //       ) {
// //       alert('please provide all required information');
// //       return;
// //     }


// //     try {
// //       const {data} = await axios.post('/users/login', {
        
// //         email: emailValue,
// //         password: passValue,

// //       });
// //       alert('login successfull');
// //       localStorage.setItem("token",data.token);
// //       // navigate("/")
// //       console.log(data)


// //     } catch (error) {
// //       alert(error?.response?.data?.msg);
      

// //       console.log(error.response.data);
// //     }
   


// //   }
// //   return (
// //     <section>
// //       <form onSubmit={handleSubmit}>
      
     
// //       <div>
// //       <span>email :--- </span>
// //         <input 
// //         ref={emailDom}
// //         type="text"
// //         placeholder="email"
// //         />
// //       </div>
// //       <br />
// //       <div>
// //       <span>password :--- </span>
// //         <input 
// //         ref={passwordDom}
// //         type="text"
// //         placeholder="password"
// //         />
// //       </div>
// //       <button type="submit">Login</button>
// //     </form>
// //     <Link to={"/register"} >register</Link>

// //     </section>
// //   )
// // }

// // export default Login



