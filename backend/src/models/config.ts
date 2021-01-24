import AppSetting from "../config";


type dbProperty = {
  username: string,
  password: string,
  database: string,
  host: string,
  dialect?: string
};

interface IDBPropertyGroup {
  [nodeEnvironment: string]: dbProperty
}

const config: IDBPropertyGroup = {
  development: {
    username: AppSetting.DB_USER,
    password: AppSetting.DB_PASSWORD,
    database: AppSetting.DB_NAME,
    host: 'localhost',
  },
  test: {
    username: AppSetting.DB_USER,
    password: AppSetting.DB_PASSWORD,
    database: '',
    host: '',
    dialect: ''
  },
  production: {
    username: AppSetting.DB_USER,
    password: AppSetting.DB_PASSWORD,
    database: '',
    host: '',
    dialect: ''
  }
};

export default config;