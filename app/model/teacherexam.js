module.exports = (sequelize, Sequelize) => {
	const Teacherexam = sequelize.define('Teacherexams', {
		exmname: {
			type: Sequelize.STRING
		},
		clsname: {
			type: Sequelize.STRING
		},

		subject: {
			type: Sequelize.STRING
		},
		typeofexam: {
			type: Sequelize.STRING
		},

        date: {
		  type: Sequelize.STRING
      },


	});

	return Teacherexam;
}