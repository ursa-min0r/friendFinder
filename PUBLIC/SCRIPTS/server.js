var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


var app = express();
var PORT = process.env.PORT || 8080;


app.use(express.static(path.join(__dirname, "./APP/PUBLIC")));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());


require(path.join(__dirname, "./APP/ROUTING/apiRoutes"))(app);
require(path.join(__dirname, "./APP/ROUTING/htmlRoutes"))(app);


app.listen(PORT, function() {
  console.log('Friend Finder app is listening on PORT: ' + PORT);
});
