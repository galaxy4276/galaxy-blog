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
  },
);

export { sequelize };
export default sequelize;