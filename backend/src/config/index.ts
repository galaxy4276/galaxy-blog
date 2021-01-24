import * as dotenv from 'dotenv';
dotenv.config();

/**
 * @return 애플리케이션 환경 변수 객체 반환한다.
 */

interface IAppSetting {
  NODE_ENV: string;
  PORT: number;
  DB_PASSWORD: string;
  HOST: string;
}

const AppSetting: IAppSetting = {
  NODE_ENV: process.env.NODE_ENV as string,
  DB_PASSWORD: process.env.DB_PASSWORD as string,
  PORT: parseInt(process.env.PORT as string, 10),
  HOST: process.env.HOST as string,
};

export default AppSetting;
