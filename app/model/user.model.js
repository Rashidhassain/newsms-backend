module.exports = (sequelize, Sequelize) => {
	const User = sequelize.define('users', {
		FirstName: {
			type: Sequelize.STRING
		},
		LastName: {
			type: Sequelize.STRING
		},
		MobileNo: {
			type: Sequelize.STRING
		},
		TelephoneNo: {
			type: Sequelize.STRING
		},
		Address: {
			type: Sequelize.STRING
		},
	  Mail: {
		  type: Sequelize.STRING
	  },
	  Password: {
		  type: Sequelize.STRING
	  },

	    ConfirmPassword: {
		  type: Sequelize.STRING
	  }
	});

	return User;
}