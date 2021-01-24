import AppSetting from "../config";

export default (): void => {
  if (AppSetting.NODE_ENV === 'development') {
    console.log('서버가 개발모드로 동작합니다.');
    console.log('개발용 로그시스템이 수행됩니다.');
  }

  console.log(`서버가 ${AppSetting.HOST}:${AppSetting.PORT} 에서 실행되었습니다.`);
};