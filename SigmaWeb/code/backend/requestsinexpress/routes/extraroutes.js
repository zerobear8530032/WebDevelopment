const express = require("express");
const router = express.Router();

router.get("/extra", (req, res) => {
    res.send("hello you are using extra routes");
    console.log("extra routes");
});

module.exports = router; 
