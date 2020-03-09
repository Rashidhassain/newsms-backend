module.exports = (sequelize, Sequelize) => {
	const Teacherhandled = sequelize.define('teacherhandleds', {
		class: {
			type: Sequelize.STRING
		},
		subject: {
			type: Sequelize.STRING
		},
		section: {
			type: Sequelize.STRING
		},
		day: {
			type: Sequelize.STRING
		},

	  role:{
		  type: Sequelize.STRING
	  }

	});

	return Teacherhandled;
}