const router = require("express").Router();

// dashboard route
router.get("/", (req, res) => {
  
  res.header("Access-Control-Allow-Origin", "*");
  res.json({
    error: null,
    data: {
      title: "My dashboard",
      content: "dashboard content",
      user: req.user,
      type: req.user.type,
    },
  });
});

module.exports = router;
