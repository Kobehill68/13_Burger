const express = require("express");
const router = express.Router();
const Burger = require("../models/burger.js");

router.get("/", (req, res) => {
    Burger.all("*", (results) => {
        res.render("index", {
          burgers: results
        });
    });
});

router.post("/api/burgers", (req, res) => {
    Burger.create(req.body, (result) => {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", (req, res) => {
    Burger.update(req.body, req.params.id, (result) => {
        if (result.changedRows == 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        } else {
          res.status(200).end();
        }
    });
});

// router.delete("api/burgers/:id", (req, res) => {
//     var condition = "id = " + req.params.id;
//     Burger.deleteOne(condition, (result) => {
//       if (result.effectedRows === 0) {return res.status(404).end(); } else { res.status(200).end(); }
//     });
// })

module.exports = router
