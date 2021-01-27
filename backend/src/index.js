"use strict";
exports.__esModule = true;
var App_1 = require("./App");
var config_1 = require("./config");
var loaders_1 = require("./loaders");
/* <<< 애플리케이션 환경 값 설정 >>> */
App_1["default"].set('port', config_1["default"].PORT);
App_1["default"].set('host', config_1["default"].HOST);
App_1["default"].listen(App_1["default"].get('port'), loaders_1.whenRunningApp);
