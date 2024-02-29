require("dotenv").config()

const express = require('express');
const port = 8000;
const app = express();

    //  db connection
    const dbConnection = require("./db/dbConfig")
    const authMiddleware = require("./middleware/authMiddleware")

        

          //  user routes middleware file
          const userRoutes = require("./routes/userRoute")

          //  user routes middleware file
          const questionsRoutes = require("./routes/questionRoute")

          // json middleware to extract json data
          app.use(express.json())
           
             //  user routes middleware
          app.use("/api/users", userRoutes)


             //  questions routes middleware
             app.use("/api/questions", authMiddleware,questionsRoutes)



                //  answers routes middleware


               async function start() {
                try {
                  const result = await dbConnection.execute("select 'test' ") 
                  await app.listen(port)
                  console.log("database connection established")
                  console.log(`listening on ${port}`)
                } catch (error) {
                  console.log(error.message)
                }
               }
               start()
                

  //      app.listen(port, (err)=>{
  //       if (err) console.log(err.message);
  //       else console.log(`listening to : port ${port}`)
  //      });

  //           app.get( '/',(req,res)=>{
  // res.send("hi there ")
  //     });





