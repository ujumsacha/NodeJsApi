const Sequelize = require("sequelize");  
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