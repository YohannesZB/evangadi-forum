// import { useRef } from "react";
// import axios from "../../axiosConfig";
// import { Link, useNavigate } from 'react-router-dom';
// import "../../../node_modules/bootstrap/dist/css/bootstrap.css"


// function SignUp({setCurrentpage}) {

//       const navigate = useNavigate()
//       const usernameDom = useRef();
//       const firstnameDom = useRef();
//       const lastnameDom = useRef();
//       const emailDom = useRef();
//       const passwordDom = useRef();
    
    
//       async function handleSubmit(e) {
//         e.preventDefault();
//         const usernameValue = usernameDom.current.value;
//         const firstValue = firstnameDom.current.value;
//         const lastValue = lastnameDom.current.value;
//         const emailValue = emailDom.current.value;
//         const passValue = passwordDom.current.value;
//         if (
//           !usernameValue ||
//           !firstValue ||
//           !lastValue ||
//           !emailValue ||
//           !passValue 
//           ) {
//           alert('please provide all required information');
//           return;
//         }
    
    
//         try {
//           await axios.post('/users/register',{
//             email: emailValue,
//             firstname: firstValue,
//             lastname: lastValue,
//             username: usernameValue,
//             password: passValue,
    
//           });
//           alert('register successfull. please login');


//           navigate("/")
//         } catch (error) {
//           alert('something went wrong!');
          
    
//           console.log(error.response);
//         }
       
    
    
//       }


//   return (
//       <div className='col card p-5 text-center '>

//       <div>
//             <h3>Join the network</h3>
//             <p className='mb-5'>Already have an account? 
//             <a href='#' onClick= {()=>setCurrentpage("login")} className='fw-semibold text-decoration-none text-warning'
//             >
//                   Sign in
//                   </a>
//                   </p>
//       </div>
//       <form action='' onSubmit={handleSubmit}>


//              <div className=" d-flex flex-column gap-3">
//       <div>
//                   <input type='email' className='form-control p-3' placeholder='Email'   ref={emailDom}/>
//                  </div>


//                   <div className='d-flex gap-4 '>
//                   <input type='text' className='form-control p-3' placeholder='First Name'  ref={firstnameDom}/>

//                   <input type='text' className='form-control p-3' placeholder='Last Name' ref={lastnameDom}/>
//                   </div>



//                   <div className='d-flex flex-column gap-6'>
//                   <input type='text' className='form-control p-3' placeholder='UserName'    ref={usernameDom}/>
//             </div>


//                   <div>
//                   <input type='password' className='form-control p-3' placeholder='password'ref={passwordDom}/>
//                  </div>

//                  </div>

//             <div className='p-3'>
//                   <small>I agree to the privacy policy and terms of service.</small>
//             </div>

//             <div className='d-grid'>
//                   <button type="submit" 
//                   className='btn btn-primary action-btn fs-5 fw-semibold'>Agree and Join</button>
//                   <div/>

//             <div className='mt-5'>
//                   <p className='d-flex justify-content-center'>
//                         <a href='#' className='fw-semibold text-decoration-non text-warning' onClick={()=>setCurrentpage("login")}>Already have an account?</a>
//                   </p>
//             </div>
//             </div>

//       </form>





//     </div>
//   )
// }

// export default SignUp



import React, { useRef } from 'react'
import axios from '../../axiosConfig'
import { useNavigate } from "react-router-dom";

const SignUp = ({ setCurrentPage }) => {
  const navigate = useNavigate()

  // References for input fields and form submission.
  const userNameDom = useRef(null)
  const firstNameDom = useRef(null)
  const lastNameDom = useRef(null)
  const emailDom = useRef(null)
  const passwordDom = useRef(null)
  console.log(userNameDom)

  const handleSubmit = async (e) => {
    e.preventDefault()
    // get values from the input fields
    let usernameValue = userNameDom.current.value
    let firstnameValue = firstNameDom.current.value
    let lastnameValue = lastNameDom.current.value
    let emailValue = emailDom.current.value
    let passValue = passwordDom.current.value
    if (
      !usernameValue ||
      !firstnameValue ||
      !lastnameValue ||
      !emailValue ||
      !passValue
    ) {
      // console.log('Please provide all required information')
      return;
    }
    try {
      await axios.post('/users/register', {
        username: usernameValue,
        firstname: firstnameValue,
        lastname: lastnameValue,
        email: emailValue,
        password: passValue
      })
      // console.log('Registration Successful!')
      navigate('/')
    } catch (err) {
      console.log(err.message)
      console.log("Username or Email already in use.")
    }
  }

  return (
    <div className='col card p-5 text-center'>
      <div>
        <h3 className='m-3'>Join the network</h3>
        <p className='mb-5'>Already have an account?{" "}
          <a href="#" onClick={() => setCurrentPage("login")} className='fw-semibold text-decoration-non text-warning'> Sing in</a>
        </p>
      </div>

      <form onSubmit={handleSubmit} action="">
        <div className='d-flex flex-column gap-3'>
          <input ref={emailDom} type="email" className='form-control p-3' placeholder='Email address' />
          <div className='d-flex gap-3'>
            <input ref={firstNameDom} type="text" className='form-control p-3' placeholder='First Name' />

            <input ref={lastNameDom} type="text" className='form-control p-3' placeholder='Last Name' />
          </div>
          <input ref={userNameDom} type="text" className='form-control p-3' placeholder='User Name' />
          <input ref={passwordDom} type="password" className='form-control p-3' placeholder='password' />
        </div>

        <div className='p-3'>
          <small>I agree to the privacy and terms of service.</small>
        </div>

        <div className='d-grid'>
          <button type='submit' className='btn btn-primary action__btn fs-5 fw-semibold'>Agree and join</button>
          <div className='mt-3'>
            <p className='d-flex justify-content-center'>
              <a href="#" onClick={() => setCurrentPage("login")} className='fw-semibold text-decoration-none text-warning'>Already have an account?</a>
            </p>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SignUp