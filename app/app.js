"use strict";

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const imagesPath = path.join(__dirname, "./src/public/js/home/images");
const homePath = path.join(__dirname, "./src/public/js/home");

// 라우팅
const home = require("./src/routes/home");

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
// URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", home); // 미들웨어 등록
app.use("/images", express.static(imagesPath));
// public/js/home 루트의 home
app.use("/home", express.static(homePath));

module.exports = app;
