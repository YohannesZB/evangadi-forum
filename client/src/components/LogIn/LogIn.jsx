// import {useRef} from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// import axios from '../../axiosConfig';

// function LogIn({setCurrentpage}) {
//       const navigate = useNavigate();
//       const emailDom = useRef();
//       const passwordDom = useRef();
    
//       async function handleSubmit(e) {
//         e.preventDefault();
        
//         const emailValue = emailDom.current.value;
//         const passValue = passwordDom.current.value;
//         if (
          
//           !emailValue ||
//           !passValue 
//           ) {
//           alert('please provide all required information');
//           return;
//         }
    
    
//         try {
//           const {data} = await axios.post('/users/login', {
            
//             email: emailValue,
//             password: passValue,
    
//           });
//           alert('login successfull');
//           navigate("/")

//           localStorage.setItem("token",data.token);
//           console.log(data)
    
    
//         } catch (error) {
//           alert(error?.response?.data?.msg);
          
    
//           console.log(error.response.data);
//         }
  
    
//       }

//   return (
//     <div className='col card p-5 text-center'>

//       <div>
//             <h3>Login to your account</h3>
//             <p className='mb-5'>Don’t have an account? <a href='#' onClick={()=>setCurrentpage("signup")} className='fw-semibold text-decoration-none text-warning'>Create a new account</a></p>
//       </div>
//       <form action='' onSubmit={handleSubmit}>

//             <div className='d-flex flex-column gap-4'>
//                   <input type='email' className='form-control p-3' placeholder='Email Address'  ref={emailDom}/>

//                   <input type='password' className='form-control p-3' placeholder='password'  ref={passwordDom}/>
//             </div>

//             <div className='mt-3'>
//                   <p className='d-flex justify-content-end'>
//                         <a href='' className='fw-semibold text-decoration-non text-warning'>Forgot password?</a>
//                   </p>
//             </div>

//             <div className='d-grid'>
//                   <button type="submit" 
//                   className='btn btn-primary action-btn fs-5 fw-semibold'>Log In</button>
//             </div>

//       </form>





//     </div>
//   )
// }

// export default LogIn




import React, { useRef } from 'react'
import { useNavigate } from "react-router-dom";
import axios from '../../axiosConfig';

const LogIn = ({ setCurrentPage }) => {
  const navigate = useNavigate();

  // Reference for the username and password fields.
  const emailDom = useRef(null)
  const passwordDom = useRef(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    // get values from the input fields
    let emailValue = emailDom.current.value
    let passValue = passwordDom.current.value
    if (
      !emailValue ||
      !passValue
    ) {
      // console.log('Please provide all required information')
      return;
    }
    try {
      const { data } = await axios.post('/users/login', {
        email: emailValue,
        password: passValue
      })
      console.log('Login Successful!')
      // console.log(data)
      localStorage.setItem("token", data.token)
      navigate('/')
    } catch (err) {
      console.log(err?.response?.data)
      console.log("Something went wrong!")
    }
  }

  return (
    <div className='col card p-5 text-center'>
      <div>
        <h3 className='m-3'>Login to your account</h3>
        <p className='mb-5'>Don't have an account? {" "}
          <a href="#" onClick={() => setCurrentPage("signup")} className='fw-semibold text-decoration-non text-warning'>Create a new account</a>
        </p>
      </div>

      <form onSubmit={handleSubmit} action="">
        <div className='d-flex flex-column gap-3'>
          <input ref={emailDom} type="email" className='form-control p-3' placeholder='Email address' />

          <input ref={passwordDom} type="password" className='form-control p-3' placeholder='password' />
        </div>

        <div className='mt-3'>
          <p className='d-flex justify-content-end'>
            <a href="" className='fw-semibold text-decoration-none text-warning'>Forgot Password?</a>
          </p>
        </div>

        <div className='d-grid'>
            <button type='submit' className='btn btn-primary action__btn fs-5 fw-semibold'>Log In</button>
        </div>
      </form>
    </div>
  )
}

export default LogIn;