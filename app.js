const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

var titleOptions = { 
        describe: 'Title of note',
        demand: true,
        alias: 't'
}

var bodyOptions = {
        describe: 'The content of the note',
        demand: true,
        alias: 'b'
}

const argv = yargs
.command('add', 'Add a new note', {
    title: titleOptions,
    body: bodyOptions
})
.command('list', 'Show a list of all notes')
.command('read', 'Read a specific note', {
    title: titleOptions
})
.command('remove', 'Remove note by title', {
    title: titleOptions,
})
.help()
.argv;
var command = argv._[0];
 
switch(command){
    case 'add':
        var note = notes.addNote(argv.title, argv.body);
        if(note){
            console.log('New note added');
            notes.logNote(note);
        }   else{
            console.log("Note with that title already exists");
        }
        break;
    case 'list':
        var allNotes = notes.getAll();
        console.log(`Printing ${allNotes.length} note(s).`);
        allNotes.forEach(note => notes.logNote(note));
        break;
    case 'read':
        var note = notes.getNote(argv.title);
        if (note){
            console.log("Note read");
            notes.logNote(note);
        } else{
            console.log("Note not found");
        }
        break;
    case 'remove':
        var noteRemoved = notes.removeNote(argv.title);
        var message = noteRemoved ? 'Note was removed' : 'Note not found';
        console.log(message);
        break;
    default: console.log("Not a recognised command");
    break;
}