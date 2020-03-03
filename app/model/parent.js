module.exports = (sequelize, Sequelize) => {
	const Parent = sequelize.define('Parents', {
		fname: {
			type: Sequelize.STRING
		},
		lname: {
			type: Sequelize.STRING
		},
		mobile: {
			type: Sequelize.STRING
		},
		stid: {
			type: Sequelize.STRING
		},

        tel: {
		  type: Sequelize.STRING
      },
      mail: {
        type: Sequelize.STRING
    },
	 password: {
		  type: Sequelize.STRING
	  },

	    cpassword: {
		  type: Sequelize.STRING
      },
      role:{
        type: Sequelize.STRING
    }
	});

	return Parent;
}