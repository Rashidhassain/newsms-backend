const db = require('../config/db.config.js');
const config = require('../config/config.js');
const Teacher = db.teacher;
const Parent = db.parent;
const Handled = db.handled;

const Role = db.role;

var fs = require('fs');
const Op = db.Sequelize.Op;
const foreign = db.foreign;
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

exports.signup = (req, res) => {
	// Save User to Database
	console.log("Processing func -> SignUp");

	Teacher.create({

		name: req.body.name,
		lname: req.body.lname,
		phone: req.body.number,
		tel: req.body.tel,
		address: req.body.address,
		email: req.body.email,
		password: bcrypt.hashSync(req.body.password, 8),
		cpassword: bcrypt.hashSync(req.body.cpassword, 8),
		role: req.body.role,


	}).then(user => {


				res.status(200).json({
					user
			});
		}).catch(err => {
			res.status(500).send("Error -> " + err);
		});

}









exports.signin = (req, res) => {
	console.log("Sign-In");

	Teacher.findOne({
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
	Teacher.findAll({
		}).then(teacher =>{
			res.status(200).json({
				teacher
		})
	}).catch(err => {
		res.status(500).send("Error -> " + err);
	});
}




// parent


exports.signups = (req, res) => {
	Parent.create({
		fname: req.body.fname,
		lname: req.body.lname,
		mobile: req.body.mobile,
		tel: req.body.tel,
		stid: req.body.stid,
		stdname: req.body.stname,
		address: req.body.address,
		mail: req.body.mail,
		password: bcrypt.hashSync(req.body.password, 8),
		cpassword: bcrypt.hashSync(req.body.cpassword, 8),
		role: req.body.roles,
	}).then(user => {
				res.status(200).json({
					user
			});
		}).catch(err => {
			res.status(500).send("Error -> " + err);
		});
}


exports.signinn = (req, res) => {
	console.log("Sign-In");

	Parent.findOne({
		where: {
mail: req.body.email
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



exports.ParentList=(req,res)=>{
	Teacher.findAll({
		}).then(parent =>{
			res.status(200).json({
				parent
		})
	}).catch(err => {
		res.status(500).send("Error -> " + err);
	});
}







// class Crud operation
exports.classadd = (req, res) => {
	Handled.create({

		class: req.body.cls,
		subject: req.body.sub,
		section: req.body.sec,
		day: req.body.day,
		date: req.body.date,
	}).then(clas => {
				res.status(200).json({
					clas
			});
		}).catch(err => {
			res.status(500).send("Error -> " + err);
		});

}


exports.classfetch=(req,res)=>{
	Handled.findAll({
	}).then(product => {
		res.status(200).json({
			 product
		});
	}).catch(err => {
		res.status(500).json({
			"description": "Can not access Product Page",
			"error": err
		});
	})
}

exports.classedit=(req,res)=>{
	var id= req.params.id;
	Handled.findOne({
		where: { id:id }
	}).then(product => {
		res.status(200).json({
			 product
		});
	}).catch(err => {
		res.status(500).json({
			"description": "Can not access Product Page",
			"error": err
		});
	})
}


exports.classupdate=(req,res)=>{
	var id= req.params.id;
	Handled.update({
		class: req.body.cls,
		subject: req.body.sub,
		section: req.body.sec,
		day: req.body.day,
		date: req.body.date},
		{where: { id:id }
	}).then(product => {
		res.status(200).json({
			 product
		});
	}).catch(err => {
		res.status(500).json({
			"description": "Can not access Product Page",
			"error": err
		});
	})
}
exports.classdelete=(req,res)=>{
	var id= req.params.id;
	Handled.destroy({
		where: { id:id },
	}).then(product => {
		res.status(200).json({
			 product
		});
	}).catch(err => {
		res.status(500).json({
			"description": "Can not access Product Page",
			"error": err
		});
	})
}


