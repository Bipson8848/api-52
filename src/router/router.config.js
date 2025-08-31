const router = require("express").Router();

router.use("/", (req, res, next) => {
  res.json({
    data: "home page",
    message: "Welcome to home page",
    status: "OK",
  });
});

module.exports = router;
