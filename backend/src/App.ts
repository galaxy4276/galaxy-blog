import * as express from 'express';
import * as morgan from 'morgan';
import AppSetting from "./config";
import db from './models';

const app = express();
// TODO: 환경에 따라 출력 메시지 수정 필요
db.sequelize.sync({ force: false })
  .then(() => console.log('local MariaDB Connected'))
  .catch(e => console.error(e));

/* <<< 외부 미들웨어 적용 부분 >>> */
if (AppSetting.NODE_ENV === 'development') {
  app.use(morgan('dev'));
} else {
  app.use(morgan('common'));
}

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // 중첩 객체 표현 ( qs or query-string )

export default app;