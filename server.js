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
mongoose.connect('mongodb://heroku_xs37vxqw:eekgp2jr2n38i5v8j130q5f4n9@ds141248.mlab.com:41248/heroku_xs37vxqw', {useNewUrlParser: true}, (err) => {
  if (err) throw err; 
  console.log('db connected')
});


//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));


const apiRoutes = require('./routes/api/api-routes'); 
app.use('/api', apiRoutes); 

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  }); 
  

app.listen(PORT, () => {
    console.log('server listening on port ' + PORT); 
}); 