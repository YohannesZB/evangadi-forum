require("dotenv").config()
const express = require('express');
const app = express();
const port = 8000;


const cors = require('cors')
app.use(cors())

    //  db connection
    const dbConnection = require("./db/dbConfig")
    const authMiddleware = require("./middleware/authMiddleware")

    //To check if the deployment is successful
    app.get("/", (req, res) => {
      res.send({ message: "Welcome to the backend" })
    })

          //  user routes middleware file
          const userRoutes = require("./routes/userRoute")

          //  user routes middleware file
          const questionRoutes = require("./routes/questionRoute")

          // answer routes middleware 
          const answerRoutes = require("./routes/answerRoute")

          // json middleware to extract json data
          app.use(express.json())
           
             //  user routes middleware
          app.use("/api/users", userRoutes)


             //  questions routes middleware
             app.use("/api/questions", authMiddleware, questionRoutes)

            // answer routes middleware
            app.use("/api/answers", authMiddleware, answerRoutes)

                //  answers routes middleware

      


               async function start() {
                try {
                  const result = await dbConnection.execute("select ' ' ") 
                  await app.listen(port)
                  console.log("database connection established")
                  console.log(`listening on ${port}`)
                } catch (error) {
                  console.log(error.message)
                }
               }
               start()
                

 




