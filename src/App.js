import React, { Component } from "react";
import NotesLists from "./components/NotesList"
import Form from "./components/Form"
import CategoryList from "./components/CategoryList";

class App extends Component {

    constructor() {
      super();

      this.state = {
        notes: [],
        categories: []
      };

    }

    createNote(title, text, category) {
      const newNote = { title, text, category };
      const newNotesArray = [...this.state.notes, newNote];

      const newState = {
        notes: newNotesArray
      }

      this.setState(newState);
    }

    deleteNote(index) {
      this.state.notes.splice(index, 1);

      const newState = {
        notes: this.state.notes
      }

      this.setState(newState);
    }

    addCategory(category) {
       const newCategoriesArray = [...this.state.categories, category];
       const newState = {
         categories: newCategoriesArray
       }

       this.setState(newState);
    }

    render() {
      return (
        <section className="main-section">
          <Form createNote = {this.createNote.bind(this)} categories = {this.state.categories}/>
          <main className="main-separator">
            <CategoryList categories = {this.state.categories} addCategory = {this.addCategory.bind(this)}/>
            <NotesLists notes = {this.state.notes} deleteNote = {this.deleteNote.bind(this)} />
          </main>
        </section>
      );
    }
}

export default App;
