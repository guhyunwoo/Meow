"use strict";

const express = require("express");
const app = express();

// 앱 세팅
app.set("views", "./views");
app.set("view engine", "ejs");

const home = require("./routes/home");
app.use("/", home);

app.listen(3000, () => {
  console.log("서버 가동");
});
