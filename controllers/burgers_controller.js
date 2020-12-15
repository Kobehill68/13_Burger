const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

router.get("/", (_req, res) => {
  burger.all((data) => {
    const dataOb = {
      burgers: data,
    };
    res.render("index", dataOb);
  });
});

router.post("/", (req, res) => {
  burger.insert(req.body.burger_name, function (result) {
    if (result) {
      res.sendStatus(201).end();
    } else {
      console.log("post error");
      res.sendStatus(400).end();
    }
  });
});

router.patch("/", (req, res) => {
  const idValue = req.body.id;
  burger.update(idValue, function (result) {
    if (result) {
      res.sendStatus(202).end();
    } else {
      console.log("patch error");
      res.sendStatus(400).end();
    }
  });
});

router.delete('/', (_req, res) => {
  burger.clear(
    function (result) {
      if (result) {
        res.sendStatus(202).end();
      } else {
        console.log("delete error");
        res.sendStatus(400).end();
      }
    }
  );
});


module.exports = router;
