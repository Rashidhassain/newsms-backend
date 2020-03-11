module.exports = (sequelize, Sequelize) => {
	const Teacherstudent = sequelize.define('teacherstudents', {
		studentid: {
			type: Sequelize.STRING
		},
		studentname: {
			type: Sequelize.STRING
		},
		fathername: {
			type: Sequelize.STRING
		},
		mothername: {
			type: Sequelize.STRING
		},
		classname: {
			type: Sequelize.STRING
		},
		gender: {
			type: Sequelize.STRING
		},
		phonenumber: {
			type: Sequelize.STRING
		},
		fathermail: {
			type: Sequelize.STRING
		},
		mothermail: {
			type: Sequelize.STRING
		},
		section: {
			type: Sequelize.STRING
		},
		address: {
			type: Sequelize.STRING
		},
		date: {
			type: Sequelize.STRING
		},
	});

	return Teacherstudent;
}