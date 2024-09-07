"use stirct";

const { message } = require("statuses");

const output = {
  home: (req, res) => {
    res.render("home/index");
  },
  login: (req, res) => {
    res.render("home/login");
  },
};

const process = {
  login: (req, res) => {
    const id = req.body.id;
    const psword = req.body.psword;

    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.psword[idx] === psword) {
        return res.json({
          success: true,
          message: "로그인에 성공하셨습니다",
        });
      }
    }
    return res.json({
      success: false,
      message: "로그인에 실패하셨습니다",
    });
  },
};

const users = {
  id: ["황준혁", "안준환", "그녀"],
  psword: ["1234", "1234", "123456"],
};

module.exports = {
  output,
  process,
};
