var express = require('express');
var router = express.Router();
var path = require('path');

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(path.join(__dirname, '../scho.db'));

/* GET users listing. */
router.get('/:id', function(req, res, next) {
    var id = req.params.id;

    db.serialize(function() {
        db.all("SELECT id, courseId, columnName AS media, targetResTypeId AS mediaType, compyStr AS catetory, title, description, downloadUrl AS url, middleIcon AS poster FROM coures_detail where id = ?", [id], function(error, rows){
            "use strict";
            if(error){
                next(error);
                return;
            }

            res.send(rows);

        });
    });
});

module.exports = router;
