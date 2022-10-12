const connectToMongo = require('./db');
const express = require('express')
connectToMongo();


connectToMongo();
const app = express()
const port = 3000

// app.get('/', (req, res) => {
  //   res.send('Hello Prajwal')
  // })

app.use(express.json())    // middleware hai use karne ke lite res.Body ko aand avoid 'undefine' word in terminal
  
// Available Routes : 
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
}) 