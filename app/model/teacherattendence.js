module.exports = (sequelize, Sequelize) => {
	const Teacherattendence = sequelize.define('Teacherattendences', {
		stid: {
			type: Sequelize.STRING
		},
		stname: {
			type: Sequelize.STRING
		},
		clsname: {
			type: Sequelize.STRING
		},
		section: {
			type: Sequelize.STRING
		},
		month: {
			type: Sequelize.STRING
		},

        numberofdays: {
		  type: Sequelize.STRING
      },
      presentdays: {
        type: Sequelize.STRING
    },
    absentdays: {
		  type: Sequelize.STRING
	  },


	});

	return Teacherattendence;
}