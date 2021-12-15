export default class NotesArray {
    constructor() {
        this.notes = [];
        this._observers = [];
    }

    observe(fn) {
        this._observers.push(fn);
    }

    notificate() {
        this._observers.forEach(fn => fn(this.notes));
    }

    createNote(title, text, category) {
        const note = new Note(title, text, category);
        
        this.notes.push(note);
        this.notificate();
    }

    deleteNote(index) {
        this.notes.splice(index, 1);
        this.notificate();
    }
}

class Note {
    constructor(title, text, category) {
        this.title = title;
        this.text = text;
        this.category = category;
    }
}