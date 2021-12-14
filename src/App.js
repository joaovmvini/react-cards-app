import React, { Component } from "react";
import NotesLists from "./components/NotesList"
import Form from "./components/Form"

class App extends Component {

    constructor() {
      super();

      this.state = {
        notes: []
      };

    }

    createNote(title, text) {
      const newNote = { title, text };
      const newNotesArray = [...this.state.notes, newNote];

      const newState = {
        notes: newNotesArray
      }

      this.setState(newState);
    }

    render() {
      return (
        <section class="main-section">
          <Form createNote = {this.createNote.bind(this)} />
          <NotesLists notes = {this.state.notes} />
        </section>
      );
    }
}

export default App;
