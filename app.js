console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;
var command = argv._[0];
console.log('Command:', command);
console.log('Yargs:', argv);

switch(command){
    case 'add':
    var note = notes.addNote(argv.title, argv.body);
    if(note){
        console.log(`New note added:, ${argv.title}, ${argv.body}`);
    }   else{
        console.log("Note with that title already exists");
    }
    break;
    case 'list':
    notes.getAll();
    break;
    case 'read':
    var note = notes.getNote(argv.title);
    if (note){
        console.log("Note found");
        console.log("----");
        console.log(`Title: ${note.title}`);
        console.log(`Body: ${note.body}`);
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