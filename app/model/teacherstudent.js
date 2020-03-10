module.exports = (sequelize, Sequelize) => {
	const Teacherstudent = sequelize.define('teacherstudents', {
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
		date: {
			type: Sequelize.STRING
		},
	});

	return Teacherstudent;
}