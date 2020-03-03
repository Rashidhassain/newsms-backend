var express = require('express');
var app = express();
cors = require('cors');
var formidable = require('formidable');
var bodyParser = require('body-parser');
var fs = require('fs');
app.use(bodyParser.json())
app.use(cors({ origin: true }));
require('./app/router/router.js')(app);

const db = require('./app/config/db.config.js');

const Role = db.role;

// force: true will drop the table if it already exists
db.sequelize.sync({force: false,alter:true}).then(() => {
  console.log('Drop and Resync with { force: true }');
  initial();
});

//require('./app/route/project.route.js')(app);

// Create a Server
var server = app.listen(8080, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("App listening at http://%s:%s", host, port)
})


function initial(){
	Role.create({
		id: 1,
		name: "TEACHER"
	});

	Role.create({
		id: 2,
		name: "ADMIN"
	});

	Role.create({
		id: 3,
		name: "PARENT"
	});
}