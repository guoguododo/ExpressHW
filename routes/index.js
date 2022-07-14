const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./apiRoutes');


router.use('/api/notes',apiRoutes);




router.get('/', function(req,res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get('/notes', function(req,res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

module.exports=router;
