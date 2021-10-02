//const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
// const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
//   host: dbConfig.HOST,
//   dialect: dbConfig.dialect,
//   operatorsAliases: false,

//   pool: {
//     max: dbConfig.pool.max,
//     min: dbConfig.pool.min,
//     acquire: dbConfig.pool.acquire,
//     idle: dbConfig.pool.idle
//   }
// });
// const sequelize = new Sequelize('postgres://ufcivnqgebsprm:93de6a9aee983b4dedf08203145dbb94c24cc257235096d1f27c358cfb0527eb@ec2-54-195-76-73.eu-west-1.compute.amazonaws.com:5432/d98nc91kf95nfv');


// const sequelize = new Sequelize(dbConfig.client);
  
sequelize = new Sequelize('postgres://ufcivnqgebsprm:93de6a9aee983b4dedf08203145dbb94c24cc257235096d1f27c358cfb0527eb@ec2-54-195-76-73.eu-west-1.compute.amazonaws.com:5432/d98nc91kf95nfv', {
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {
      ssl: {
          require: true,
          rejectUnauthorized: false
      }
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Product = require("./product.js")(sequelize, Sequelize);

module.exports = db;