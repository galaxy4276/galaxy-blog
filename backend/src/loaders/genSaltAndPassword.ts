import * as bcrypt from "bcrypt";
import AppSetting from "../config";

export default (password: string): Promise<string> =>
  new Promise((resolve, reject) => {
    bcrypt.genSalt(12, (err: Error, salt: string) => {

      if (err) throw reject(err);

      if (AppSetting.NODE_ENV === 'development')
        console.log('12 라운드 기반 salt 값 생성!');

      bcrypt.hash(password, salt, (err: Error, hash: string) => {
        if (err) reject(err);
        if (AppSetting.NODE_ENV === 'development')
          console.log('salt 기반 hash 값 생성!');
        resolve(hash);
      });
    });
  });
