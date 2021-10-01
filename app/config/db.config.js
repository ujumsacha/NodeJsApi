module.exports = {
    HOST: "localhost",
    USER: "openpg",
    PASSWORD: "openpgpwd",
    DB: "ApiDbTest",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };