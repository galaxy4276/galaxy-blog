import config from "./config";
import AppSetting from "../config";
import { Sequelize } from 'sequelize';

const env = {...config[AppSetting.NODE_ENV]};
const { username, database, password } = env;

const sequelize = new Sequelize(
  database,
  username,
  password,
  {
    dialect: 'mariadb',
    timezone: '+09:00',
    pool: {
      max: 30,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
);

export { sequelize };
export default sequelize;