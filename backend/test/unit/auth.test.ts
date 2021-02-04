import * as httpMocks from 'node-mocks-http';
import User from "../../src/models/user";
import {join} from "../../src/api/auth";
import {NextFunction, Request, Response} from "express";


User.findOne = jest.fn();
User.destroy = jest.fn();
User.update = jest.fn();
User.create = jest.fn();

let req: Request, res: Response, next: NextFunction;
beforeEach(() => {
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();
  next = jest.fn();
});

describe('사용자 인증 관련 테스트', () => {
  describe('회원 가입', () => {
    it("회원 가입 컨트롤러가 존재하는 지?", () => {
      expect(typeof join).toBe('function');
    });

    it('닉네임에 한글이 들어 갈 때 검증되는가?', async () => {
      req.body = {
        nickname: '최은기',
        password: '@Chldmsrl12',
        email: 'chldmsrl12@nchld.com'
      };

      await join(req, res, next);
      expect(res.statusCode).toBe(400);
    });

    it('패스워드 특수문자를 검증하는가?', async () => {
      req.body = {
        nickname: 'chldmsrl12',
        password: 'Chldmsrl12',
        email: 'chldmsrl12@nchld.com'
      };

      await join(req, res, next);
      expect(res.statusCode).toBe(400);
    });

    it('닉네임 길이제한을 검증하는가?', async () => {
      req.body = {
        nickname: 'chlchlchlchlchlchld',
        password: '@Chldmsrl12',
        email: 'chldmsrl12@nchld.com'
      };

      await join(req, res, next);
      expect(res.statusCode).toBe(400);
    })
  });
});