const router = require('express').Router();

router.use('/notes',notesRoutes);


router.route('/')
.get((req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
}) ;


module.exports=router;