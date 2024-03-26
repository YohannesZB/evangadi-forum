// import React, {useContext} from 'react'
// import Header from '../components/Header/Header'
// import { useNavigate, Link } from 'react-router-dom';
// import "../../node_modules/bootstrap/dist/css/bootstrap.css"
// import { FaAngleRight } from 'react-icons/fa6';
// import { PiUserCircleDuotone } from 'react-icons/pi';
// import { AppState } from '../App';

// const Home = () => {
//   const { user, setUser, question, setQuestion } = useContext(AppState);
//   console.log(question);
//   console.log(user);


//     const navigate = useNavigate();
//   // const handleAnswerClick = () => {
//   //   navigate("/answer"); 
//   // };

//   const handleAskQuestionClick = () => {
//     navigate("/questions"); 
//   };
//   return (
//     <>
//     <Header />

//     <section className='bg-body-tertiary'>
    
//     <hr />
//     <div className='d-flex justify-content-around pt-5 bg-body-tertiary'>

//        <a
//             href="#"
//             onClick={handleAskQuestionClick}
//             className="btn btn-primary action_btn px-5"
//           >
           
//             Ask Question
//           </a>
//       <p className='fw-semibold'> <span className='text-warning'>Welcome,</span>{user.username}</p>
//     </div>
    

//     <div className='container mt-5'>

//     <h2>Questions</h2>
//     {question.allquestion && question.allquestion.map((item, index) => (
//       <Link
//       className="text-decoration-none text-black"
//       key={index}
//       to={`/answer?title=${encodeURIComponent(item.title)}&description=${encodeURIComponent(item.description)}&questionid=${encodeURIComponent(item.questionid)}`}
//     >
    

//       <hr />
//       <div className="d-flex justify-content-between align-items-center ">
//         <div className="d-flex flex-column align-items-center gap-3">
//           {/* user */}
//           <div className="user-icon">
//             <PiUserCircleDuotone />
//           </div>
//           <div>{user.username}</div>
//         </div>
//         <div>
//           {/* question */}
//           <p>{item.title}</p>
//         </div>
//         <div>
//           {/* arrow */}
//           <FaAngleRight />
//         </div>
//       </div>
//     </Link>
//     ))}
   

//     </div>
//     </section>
//     </>
//   )
// }

// export default Home




import React, { useContext } from "react";
import Header from "../components/Header/Header";
import { useNavigate, Link } from "react-router-dom";
import { PiUserCircleDuotone } from "react-icons/pi";
import { FaAngleRight } from "react-icons/fa6";
import { AppState } from "../App";

const Home = () => {
  const { user, question } = useContext(AppState);
  // console.log(question);
  console.log(user.username);

  const navigate = useNavigate();

  const handleAskQuestionClick = () => {
    navigate("/questions"); // Navigates to the "/questions" route
  };

  return (
    <>
      <Header />
      <section className=" bg-body-tertiary">
        <div className="d-flex justify-content-around pt-5  ">
          <a
            href="#"
            onClick={handleAskQuestionClick}
            className="btn btn-primary action_btn px-5"
          >

            Ask Question
          </a>
          {/* <button className="btn btn-primary action_btn px-5">
            Ask Question
          </button> */}

          <p className="fw-semibold">
            <span className="text-warning">Welcome, </span>
            {/* {user.username} */}
          </p>
        </div>

        <div className="container mt-5">
          <h2>Question</h2>

          {question.allquestion &&
            question.allquestion.map((item, index) => (
              <Link
                className="text-decoration-none text-black"
                key={index}
                to={`/answer?title=${encodeURIComponent(item.title)}&description=${encodeURIComponent(item.description)}&questionid=${encodeURIComponent(item.questionid)}`}
              >
                <hr />
                <div className="d-flex justify-content-between align-items-center ">
                  <div className="d-md-flex align-items-center gap-4">
                    <div className="d-flex flex-column align-items-center gap-3 ">
                      {/* user */}
                      <div>
                        <PiUserCircleDuotone size={100} />
                      </div>
                      <div>{item.username}</div>
                    </div>
                    <div>
                      {/* question */}
                      <p>{item.title}</p>
                    </div>
                  </div>

                  <div>
                    {/* arrow */}
                    <FaAngleRight size={30} />
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </section>
    </>
  );
};

export default Home;