var express = require('express');
var app = express();

process.env.PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));

app.listen(process.env.PORT, function() {
  console.log('listening on port 3000');
});
