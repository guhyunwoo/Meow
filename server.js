const express = require("express");
const app = express();

app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.set("views", __dirname + "/public");
app.get("*", (req, res) => {
  res.render("index", { title: "Express" });
});

app.get("/login", (req, res) => {
  res.send("여기는 로그인 화면입니다.");
});
app.listen(3000, () => {
  console.log("서버 작동");
});

app.get("/", (req, res) => {
  res.render("index", { title: "Express" });
});
