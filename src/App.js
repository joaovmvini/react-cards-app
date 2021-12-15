import React, { Component } from "react";
import NotesLists from "./components/NotesList"
import Form from "./components/Form"
import CategoryList from "./components/CategoryList";
import Categories from "./data/Categories";
import NotesArray from "./data/Notes";

class App extends Component {

    constructor() {
      super();

      this.categories = new Categories();
      this.notes = new NotesArray();
    }


    render() {
      return (
        <section className="main-section">
          <Form notes = {this.notes} createNote = {this.notes.createNote.bind(this.notes)} categories = {this.categories.categories}/>
          <main className="main-separator">
            <CategoryList categories = {this.categories} addCategory = {this.categories.addCategory.bind(this.categories)}/>
            <NotesLists notes = {this.notes.notes} deleteNote = {this.notes.deleteNote.bind(this.notes)} />
          </main>
        </section>
      );
    }
}

export default App;
