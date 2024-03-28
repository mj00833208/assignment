var config;
const setupConfig = () => {
  if (!config) {
    config={};
    config.sqlConfig = {
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE
    };
  }
  return config;
};

module.exports = setupConfig();
