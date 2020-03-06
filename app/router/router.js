const verifySignUp = require('./verifySignUp');
const authJwt = require('./verifyJwtToken');

module.exports = function(app) {
    const controller = require('../controller/controller.js');
	app.post('/api/auth/signup', [verifySignUp.checkDuplicateUserNameOrEmail], controller.signup);
	app.post('/api/auth/signin', controller.signin);
	app.get('/api/teacherList', controller.TeacherList);
	// app.get('/api/parentList', controller.ParentList);

}
