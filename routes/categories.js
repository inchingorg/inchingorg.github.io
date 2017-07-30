var express = require('express');
var router = express.Router();
var path = require('path');

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(path.join(__dirname, '../scho.db'));

db.on('trace', function(sql){
    "use strict";

    console.info(sql);
});

/* GET users listing. */
router.get('/:category', function (req, res, next) {
    var category = req.params.category;

    db.serialize(function () {
        db.all("SELECT id, courseId, columnName AS media, targetResTypeId AS mediaType, compyStr AS catetory, title, description, downloadUrl AS url, middleIcon AS poster FROM coures_detail WHERE compyStr = ?", [category], function (error, rows) {
            "use strict";
            if (error) {
                next(error);
                return;
            }

            res.send(rows);

        });
    });
});

module.exports = router;
