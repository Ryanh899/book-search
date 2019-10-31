const express = require('express'); 
const app = express(); 
const path = require('path'); 
const cors = require('cors'); 
const mongoose = require('mongoose'); 
const PORT = process.env.PORT || 3001


//setting cors headers to allow react app to hit REST API 
app.use(
  cors({
    origin: "http://localhost:3000", // allow to server to accept request from different origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true // allow session cookie from browser to pass through
  })
);

// mongodb 
mongoose.connect('mongodb://localhost:27017/reactreadinglist', {useNewUrlParser: true}, (err) => {
  if (err) throw err; 
  console.log('db connected')
});


//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets 
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const apiRoutes = require('./routes/api/api-routes'); 
app.use('/api', apiRoutes); 

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  }); 
  

app.listen(PORT, () => {
    console.log('server listening on port ' + PORT); 
}); 