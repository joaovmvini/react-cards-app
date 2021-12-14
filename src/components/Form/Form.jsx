import React, { Component } from 'react';
import './style.css';

export default class Form extends Component {
    
    constructor(props) {
        super(props);

        this.title = '';
        this.text = '';
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

        this.props.createNote(this.title, this.text);
    }

    render() {
        return (
        <form 
            class="form-new-note"
            onSubmit={this._createNote.bind(this)}
        >
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
