import React, { Component } from 'react';
import './style.css';

export default class Form extends Component {
    
    constructor(props) {
        super(props);

        this.title = '';
        this.text = '';
        this.category = 'No category';
    }

    componentDidMount() {
        this.props.notes.observe(this._newNote);
    }

    _newNote(notes) {
        console.log(notes);
    }

    _handleTitleChange(event) {
        event.stopPropagation();

        this.title = event.target.value;
    }

    _handleTextChange(event) {
        event.stopPropagation();

        this.text = event.target.value;
    }

    _createNote(event) {
        event.preventDefault();
        event.stopPropagation();

        this.props.notes.createNote(this.title, this.text, this.category);
        this.props.notes.notificate();
    }

    _renderCategories() {
        const categories = this.props.categories;

        return categories.map((item, index) => {
            return (
                <option >{item}</option>
            )
        });
    }

    _handleCategoryChange(event) {
        event.stopPropagation();
        this.category = event.target.value;
    }

    render() {
        return (
        <form 
            class="form-new-note"
            onSubmit={this._createNote.bind(this)}
        >
            <select 
            className="form-categories-list"
            onChange={this._handleCategoryChange.bind(this)}
            >
                <option>No Category</option>
                {this._renderCategories()}
            </select>
            <input 
            type="text" 
            placeholder="Titulo"
            onChange={this._handleTitleChange.bind(this)}
            />
            <textarea 
            placeholder="Nota..."
            onChange={this._handleTextChange.bind(this)}
            >    
            </textarea>
            <button>Criar nota</button>
        </form>
        )
    }
}
