import * as express from 'express';
import * as morgan from 'morgan';
import AppSetting from "./config";
import db from './models';
import router from "./routes";
import {asyncDB} from "./loaders";
import * as cookieParser from 'cookie-parser';
import * as session from 'express-session';
import * as passport from "passport";
import passportConfig from './api/passport';

const app = express();

/* <<< 외부 미들웨어 적용 부분 >>> */
if (AppSetting.NODE_ENV === 'development') {
  asyncDB()
    .then(() => console.log('더미 데이터 생성 완료.'));
  app.use(morgan('dev'));
} else {
  db.sequelize.sync({ force: false })
    .then(() => console.log('마리아 디비 연결 성공.'))
    .catch(e => console.error(e));
  app.use(morgan('common'));
}

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // 중첩 객체 표현 ( qs or query-string )
app.use(cookieParser(AppSetting.SECRET, {}));
app.use(session({
  name: 'cookie',
  secret: AppSetting.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    path: '/',
    httpOnly: true,
    secure: false,
    maxAge: Date.now() + 3600000,
  }
}));
app.use(passport.initialize());
app.use(passport.session());
passportConfig();


app.use(router);

export default app;

