const fs = require('fs');
const router = require('express').Router();


    fs.readFile("db/db.json","utf8", (err, data) => {

        if (err) throw err;

        let notes = JSON.parse(data);
    
        // Setup the /api/notes get route
        router.get("/", function(req, res) {
            // Read the db.json file and return all saved notes as JSON.
            res.json(notes);
        });

        // Setup the /api/notes post route
        router.post("/", function(req, res) {
            // Receives a new note, adds it to db.json, then returns the new note
            let newNote = req.body;
            notes.push(newNote);
            updateDb();
            return console.log("Added new note: "+newNote.title);
        });

        // Retrieves a note with specific id
        router.get("/:id", function(req,res) {
            // display json for the notes array indices of the provided id
            res.json(notes[req.params.id]);
        });

        // Deletes a note with specific id
        router.delete("/:id", function(req, res) {
            notes.splice(req.params.id, 1);
            updateDb();
        });

        //updates the json file whenever a note is added or deleted
        function updateDb() {
            fs.writeFile("db/db.json",JSON.stringify(notes,'\t'),err => {
                if (err) throw err;
                return true;
            });
        }

    });




module.exports=router;