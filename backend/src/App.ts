import * as express from 'express';
import * as morgan from 'morgan';
import AppSetting from "./config";

const app = express();


/* <<< 외부 미들웨어 적용 부분 >>> */
if (AppSetting.NODE_ENV === 'development') {
  app.use(morgan('dev'));
} else {
  app.use(morgan('common'));
}

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // 중첩 객체 표현 ( qs or query-string )

export default app;