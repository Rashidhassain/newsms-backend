const db = require('../config/db.config.js');
const config = require('../config/config.js');
const User = db.user;
const Role = db.role;

var fs = require('fs');
const Op = db.Sequelize.Op;
const foreign = db.foreign;
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

exports.signup = (req, res) => {
	// Save User to Database
	console.log("Processing func -> SignUp");

	User.create({

		name: req.body.name,
		lname: req.body.lname,
		phone: req.body.number,
		tel: req.body.tel,
		address: req.body.address,
		email: req.body.email,
		password: bcrypt.hashSync(req.body.password, 8),
		cpassword: bcrypt.hashSync(req.body.cpassword, 8)

	}).then(user => {
		Role.findAll({
			where: {
				name: {
					[Op.or]: req.body.roles
				}
			}
		}).then(roles => {
			user.setRoles(roles).then(() => {
				res.status(200).json({
					user
				});
			});
		}).catch(err => {
			res.status(500).send("Error -> " + err);
		});
	}).catch(err => {
		res.status(500).send("Fail! Error -> " + err);
	})
}









exports.signin = (req, res) => {
	console.log("Sign-In");

	User.findOne({
		where: {
email: req.body.email
		}
	}).then(user => {
		if (!user) {
			return res.status(404).send('User Not Found.');
		}
		var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
		if (!passwordIsValid) {
			return res.status(401).send({ auth: false, accessToken: null, reason: "Invalid Password!" });
		}

		var token = jwt.sign({ id: user.id }, config.secret, {
			expiresIn: 86400 // expires in 24 hours
		});
		res.status(200).send({ auth: true, accessToken: token });
	}).catch(err => {
		res.status(500).send('Error -> ' + err);
	});
}



exports.TeacherList=(req,res)=>{
	User.findAll({
		include: [{
			model: Role,
			attributes: ['id', 'name'],
			through: {
				attributes: ['userId', 'roleId'],
			}
		}]
		}).then(teacher =>{
			res.status(200).json({
				teacher
		})
	}).catch(err => {
		res.status(500).send("Error -> " + err);
	});
}