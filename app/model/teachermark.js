module.exports = (sequelize, Sequelize) => {
	const Teachermark = sequelize.define('Teachermarks', {
		studentid: {
			type: Sequelize.STRING
		},
		studentname: {
			type: Sequelize.STRING
		},

		classname: {
			type: Sequelize.STRING
		},
		typeofexam: {
			type: Sequelize.STRING
		},
		section: {
			type: Sequelize.STRING
		},

	});

	return Teachermark;
}