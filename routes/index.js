const router = require('express').Router();
const apiRoutes = require('./apiRoutes');


router.use('/api',apiRoutes);
router.use('/notes',apiRoutes);

router.route('*')
.get((req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
}) ;


module.exports=router;