import React, { Component } from 'react';
import './style.css';

// Just works using create-react-app, otherwise SVGR should be used.
import { ReactComponent as DeleteSVG } from '../../assets/delete.svg';

export default class CardNote extends Component {
    
    constructor(props) {
        super(props);

    }

    render() {
        return (
        <section className='card-note-section'>
            <header>
                <span>{this.props.title}</span>
                <DeleteSVG onClick={() => this.props.deleteNote(this.props.index)} />
            </header>
            <p>{this.props.text}</p>
        </section>
        )
    }
}
