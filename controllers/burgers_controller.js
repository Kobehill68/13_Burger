const express = require("express");
const router = express.Router();
const burger = require("../models/burger");

router.get("/", (req, res) => {
    burger.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", (req, res) => {
    burger.create(["burger_name"], [req.body.name], function (result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", (req, res) => {
    const id = req.params.id;
    const data = req.body.devoured;
    const cols = {
        idParm: "id",
        devourParm: "devoured"
    };

    burger.update(cols, [data, id], (result) => {
        res.json({ id: result.affectedRows });
    })
});

router.delete("/api/delete", (req, res) => {
    burger.delete((result) => {
        res.json(result);
    });
});

module.exports = router;
