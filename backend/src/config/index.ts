import * as dotenv from 'dotenv';
dotenv.config();

/**
 * @return 애플리케이션 환경 변수 객체 반환한다.
 */

interface IAppSetting {
  readonly NODE_ENV: string;
  readonly PORT: number;
  readonly DB_PASSWORD: string;
  readonly HOST: string;
  readonly DB_USER: string;
  readonly DB_NAME: string;
  readonly SECRET: string;
}

const AppSetting: IAppSetting = {
  NODE_ENV: process.env.NODE_ENV as string,
  DB_PASSWORD: process.env.DB_PASSWORD as string,
  PORT: parseInt(process.env.PORT as string, 10),
  HOST: process.env.HOST as string,
  DB_USER: process.env.DB_HOST as string,
  DB_NAME: process.env.DB_NAME as string,
  SECRET: process.env.SECRET as string,
};

export default AppSetting;
