const env = require('./env.js');

const Sequelize = require('sequelize');

const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: false,

  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.teacher = require('../model/teacher.js')(sequelize, Sequelize);
db.role = require('../model/role.model.js')(sequelize, Sequelize);
db.handled = require('../model/teacherhandled.js')(sequelize, Sequelize);
db.student = require('../model/teacherstudent.js')(sequelize, Sequelize);
db.marks = require('../model/teachermark.js')(sequelize, Sequelize);

db.parent = require('../model/parent.js')(sequelize, Sequelize);
module.exports = db;