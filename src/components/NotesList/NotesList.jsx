import React, { Component } from 'react';
import CardNote from '../cardNote'

import './style.css';

export default class NotesList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: []
        }

        this._newNotes = this._newNote.bind(this);
    }

    componentDidMount() {
        this.props.notes.observe(this._newNotes);
    }

    componentWillUnmount() {
        this.props.notes.unobserve(this._newNotes);
    }

    _newNote(notes) {
        this.setState({ ...this.state, notes });
    }

    renderNote() {
        const notes = this.state.notes;
        
        return notes.map((note, index) => {
            return (
                <li className="notes-item" key={index}>
                    <CardNote 
                    title={note.title} 
                    text={note.text} 
                    deleteNote = {this.props.deleteNote}
                    index={index}
                    category={note.category}
                    >
                    </CardNote>
                </li>
            )
        })
    }

    render() {
        return (
            <ul className="notes-parent">
                {this.renderNote()}
            </ul>
        )
    }
}
