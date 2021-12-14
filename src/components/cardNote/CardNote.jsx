import React, { Component } from 'react';
import './style.css';

export default class CardNote extends Component {
    
    constructor(props) {
        super(props);

    }

    render() {
        return (
        <section key={this.props.index} className='card-note-section'>
            <header>
                <span>{this.props.title}</span>
            </header>
            <p>{this.props.text}</p>
        </section>
        )
    }
}
