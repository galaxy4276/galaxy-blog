"use strict";
exports.__esModule = true;
var config_1 = require("../config");
exports["default"] = (function () {
    if (config_1["default"].NODE_ENV === 'development') {
        console.log('서버가 개발모드로 동작합니다.');
        console.log('개발용 로그시스템이 수행됩니다.');
    }
    console.log("\uC11C\uBC84\uAC00 " + config_1["default"].HOST + ":" + config_1["default"].PORT + " \uC5D0\uC11C \uC2E4\uD589\uB418\uC5C8\uC2B5\uB2C8\uB2E4.");
});
