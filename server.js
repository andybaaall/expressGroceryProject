const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

// const data = require('./MOCK_DATA');

app.listen(port, () => console.log(`application is running on port ${port}`));

app.use(function(req, res, next){
  console.log(`${req.method} request for ${req.url}`);
  next();
});

app.get('/', function(req, res){
  res.end('hello, world!');
});

app.get('/groceries', function(req, res){
  res.json(data);
  console.log(req.params);
});


// we're using the server and the URL to filter. No front-end!

  // console.log(req);
  // const genderParam = req.params.gender;
  // if( (genderParam === 'male') || (genderParam === 'female') ){
  //   let filteredData = [];
  //   for (var i = 0; i < data.length; i++) {
  //     if(genderParam === data[i].gender.toLowerCase()){
  //       filteredData.push(data[i]);
  //     }
  //   }
  //   res.send(filteredData);
  // } else {
  //   res.send('Invalid Parameter')
  // }
// });
