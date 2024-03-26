// const express = require('express');
// const router = express.Router() 


// // authonthication middleware

//      const authMiddleware = require('../middleware/authMiddleware')

//       const { postQuestion ,allQuestion } = require("../controller/questionController");


//      router.post("/postquestions", postQuestion );
//       router.get("getquestions", all)
     

//      module.exports = router


const express = require('express');
const router = express.Router(); 

// Import the authentication middleware
const authMiddleware = require('../middleware/authMiddleware');

// Import the question controller
const { postQuestion, allQuestion } = require("../controller/questionController");

// Define the POST route to post a question
router.post("/postquestions", postQuestion);

// Define the GET route to get all questions
router.get("/all-questions", allQuestion);

module.exports = router;
