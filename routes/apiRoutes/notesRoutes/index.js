const router = require('express').Router();
const fs = require("fs");

function updateDb() {
    fs.writeFile("db/db.json",JSON.stringify(notes,'\t'),err => {
        if (err) throw err;
        return true;
    });
}


router.route('/')
.get((req, res) => {
    res.json(notes);
  }) 
.post((req, res) => {
  
    let newNote = req.body;

    if (req.body) {
        notes.push(newNote);
        updateDb();
        return console.log("Added new note: "+newNote.title);

    } else {
      res.error('Error in adding notes');
    }
});

router.route('/:id')
.get((req, res) => {
    res.json(notes[req.params.id]);

})
.delete((req, res) => {

    notes.splice(req.params.id, 1);
    updateDb();
    console.log("Deleted note with id "+req.params.id);
});




module.exports=router;