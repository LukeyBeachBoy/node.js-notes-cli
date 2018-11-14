console.log('Starting notes.js');

const fs = require('fs');

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };    
    var duplicateNotes = notes.filter((tempNote) => tempNote.title === title);
        //notes.filter(note) is the same as doing a for(var in array) loop

    if (duplicateNotes.length === 0) { 
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var getAll = () => {
    console.log('Getting all notes');
};

var getNote = (title) => {
    var notes = fetchNotes();
    var specificNote = notes.filter((tempNote) => tempNote.title === title);
    if(specificNote.length ===1)return specificNote[0];
};

var removeNote = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((tempNote) => tempNote.title !== title);
    saveNotes(filteredNotes);

    return notes.length !== filteredNotes.length;
};
module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};