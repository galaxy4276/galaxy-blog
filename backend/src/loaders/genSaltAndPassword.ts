import * as bcrypt from "bcrypt";
import AppSetting from "../config";

export default async (password: string) => {
  if (AppSetting.NODE_ENV === 'development') {
    const cryptedPW: string = await bcrypt.genSalt(12, (err, salt) => {
      if (err) throw Error('salt 값 생성 불가');
      bcrypt.hash(password, salt, (err, hash) => {
        if (err) throw Error('비밀번호 hash 실패!');
        return hash;
      });
    });

    return cryptedPW;
  } else {
    const cryptedPW: string = await bcrypt.genSalt(12, (err, salt) => {
      if (err) throw Error('salt 값 생성 불가');
      if (salt) console.log('12 라운드 salt 값 생성!');
      bcrypt.hash(password, salt, (err, hash) => {
        if (err) throw Error('비밀번호 hash 실패!');
        console.log('salt 기반 hash 값 생성!');
        return hash;
      });
    });

    return cryptedPW;
  }
};