import app from './App';
import AppSetting from "./config";
import {whenRunningApp} from "./loaders";


/* <<< 애플리케이션 환경 값 설정 >>> */
app.set('port', AppSetting.PORT);
app.set('host', AppSetting.HOST);


app.listen(app.get('port'), whenRunningApp);

