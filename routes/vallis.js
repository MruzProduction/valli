var express = require('express');
var router = express.Router();
var Valli = require('../models/valli').Valli;

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('Новый маршрутизатор, для маршрутов, начинающихся с vallis');
});

router.get("/:nick", async function (req, res, next) {
    var vallis = await Valli.find({ nick: req.params.nick });
    console.log(vallis)
    if (!vallis.length) return next(new Error("Нет такого героя в мультфильме Валли"))
var valli = vallis[0];
    res.render('valli', {
        title: valli.title,
        picture: valli.avatar,
        desc: valli.desc
    })
});

module.exports = router;