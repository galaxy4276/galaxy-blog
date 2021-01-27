"use strict";
exports.__esModule = true;
var dotenv = require("dotenv");
dotenv.config();
var AppSetting = {
    NODE_ENV: process.env.NODE_ENV,
    DB_PASSWORD: process.env.DB_PASSWORD,
    PORT: parseInt(process.env.PORT, 10),
    HOST: process.env.HOST,
    DB_USER: process.env.DB_HOST,
    DB_NAME: process.env.DB_NAME
};
exports["default"] = AppSetting;
