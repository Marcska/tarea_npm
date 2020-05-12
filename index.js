const express = require('express');
const app = express();
app.get('/', function (req, res) {
  res.send('Mi primer servidor')
})
app.listen(3000, () => console.log('Mi primer servidor por http://localhost:3000'));
