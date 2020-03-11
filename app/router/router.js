const verifySignUp = require('./verifySignUp');
const authJwt = require('./verifyJwtToken');

module.exports = function(app) {
	const controller = require('../controller/controller.js');

// teacher register and login //
	app.post('/api/auth/signup', [verifySignUp.checkDuplicateUserNameOrEmail], controller.signup);
	app.post('/api/auth/signin',  controller.signin);
// teacher register and login //


//  parent register and login //
	app.post('/api/auth/signups',  [verifySignUp.parentcheck], controller.signups);
	app.post('/api/auth/signinn',  controller.signinn);
// parent register and login //



	app.get('/api/teacherList',  [authJwt.verifyToken], controller.TeacherList);


	// app.get('/api/parentList', controller.ParentList);


// handled crud operation
	app.post('/class/add',controller.classadd);
		app.get('/class/fetch', [authJwt.verifyToken], controller.classfetch);
		app.delete('/class/delete/:id', [authJwt.verifyToken], controller.classdelete);
		app.get('/class/edit/:id',  [authJwt.verifyToken],controller.classedit);
		app.put('/class/update/:id', [authJwt.verifyToken], controller.classupdate);



// student crud operation
app.post('/clas1/add1',controller.clas1add1);


}

