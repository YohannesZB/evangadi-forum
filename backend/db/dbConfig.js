const mysql2 = require('mysql2'); 
const dbConnection = mysql2.createPool({
  user: process.env.USERR,
  database: process.env.DATABASE,
  host: "195.179.237.204",
  password: process.env.PASSWORD,
  connectionLimit: 10
})
// console.log(process.env.JWT_SECRET)
//   dbConnection.execute("select 'its working' ", (err,result) => {
//   if (err) {
//     console.log(err.message)
//   }else{
//     console.log(result)
//   }
// });

module.exports = dbConnection.promise();
