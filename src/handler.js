const express = require('express');
const router = express.Router();
const data = require('./records.json')

router.get('/', (req, res) => {
    const str = data;
    res.end(JSON.stringify(str));
});


module.exports = router;