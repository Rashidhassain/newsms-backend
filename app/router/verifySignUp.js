const db = require('../config/db.config.js');
const config = require('../config/config.js');
const ROLEs = config.ROLEs;
const Teacher = db.teacher;
const Parent = db.parent;

checkDuplicateUserNameOrEmail = (req, res, next) => {
		Teacher.findOne({
			where: {
				email: req.body.email
			}
		}).then(user => {
			if(user){
				res.status(400).send("Fail -> Email is already in use!");
				return;
			}

			next();
		});

}


parentcheck = (req, res, next) => {
	// -> Check Username is already in use


		// -> Check Email is already in use
		Parent.findOne({
			where: {
				mail: req.body.mail
			}
		}).then(user => {
			if(user){
				res.status(400).send("Fail -> Email is already in use!");
				return;
			}

			next();
		});

}

checkRolesExisted = (req, res, next) => {
	for(let i=0; i<req.body.roles.length; i++){
		if(!ROLEs.includes(req.body.roles[i].toUpperCase())){
			res.status(400).send("Fail -> Does NOT exist Role = " + req.body.roles[i]);
			return;
		}
	}
	next();
}

const signUpVerify = {};
signUpVerify.checkDuplicateUserNameOrEmail = checkDuplicateUserNameOrEmail;
signUpVerify.parentcheck = parentcheck;
signUpVerify.checkRolesExisted = checkRolesExisted;

module.exports = signUpVerify;