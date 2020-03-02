module.exports = (sequelize, Sequelize) => {
	const User = sequelize.define('users', {
		name: {
			type: Sequelize.STRING
		},
		lname: {
			type: Sequelize.STRING
		},
		phone: {
			type: Sequelize.STRING
		},
		tel: {
			type: Sequelize.STRING
		},
		address: {
			type: Sequelize.STRING
		},
	  email: {
		  type: Sequelize.STRING
	  },
	 password: {
		  type: Sequelize.STRING
	  },

	    cpassword: {
		  type: Sequelize.STRING
	  }
	});

	return User;
}