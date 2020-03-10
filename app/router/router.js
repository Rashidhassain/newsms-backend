const verifySignUp = require('./verifySignUp');
const authJwt = require('./verifyJwtToken');

module.exports = function(app) {
    const controller = require('../controller/controller.js');
	app.post('/api/auth/signup', [verifySignUp.checkDuplicateUserNameOrEmail], controller.signup);
	app.post('/api/auth/signups',  [verifySignUp.parentcheck], controller.signups);
	app.post('/api/auth/signin',  controller.signin);
	app.get('/api/teacherList',  [authJwt.verifyToken], controller.TeacherList);


	// app.get('/api/parentList', controller.ParentList);


// class crud operation
	app.post('/class/add',controller.classadd);
		app.get('/class/fetch', [authJwt.verifyToken], controller.classfetch);
		app.delete('/class/delete/:id', [authJwt.verifyToken], controller.classdelete);
		app.get('/class/edit/:id',  [authJwt.verifyToken],controller.classedit);
		app.put('/class/update/:id', [authJwt.verifyToken], controller.classupdate);

}
