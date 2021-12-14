import React, { Component } from 'react';
import CardNote from '../cardNote'

import './style.css';

export default class Form extends Component {
    constructor(props) {
        super(props);
    }

    renderNote() {
        if (this.props.notes.length) {
            const notes = this.props.notes;

            return notes.map((note, index) => {
                return (
                    <li className="notes-item" key={index}>
                        <CardNote 
                        title={note.title} 
                        text={note.text} 
                        deleteNote = {this.props.deleteNote}
                        index={index}></CardNote>
                    </li>
                )
            })
        }

        return '';
    }

    render() {
        return (
            <ul className="notes-parent">
                {this.renderNote()}
            </ul>
        )
    }
}
