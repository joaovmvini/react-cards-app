import React, { Component } from 'react';
import './style.css';

export default class Form extends Component {
    
    constructor(props) {
        super(props);

        this.title = '';
        this.text = '';
        this.category = 'No category';

        this.state = {
            categories: []
        }

        this._newCategories = this._newCategory.bind(this);
    }

    componentDidMount() {
        this.props.categories.observe(this._newCategories);
    }

    componentWillUnmount() {
        this.props.categories.unobserve(this._newCategories);
    }

    _newCategory(categories) {
        this.setState({ ...this.state, categories });
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
    }

    _renderCategories() {
        const categories = this.state.categories;

        return categories.map((item, index) => {
            return (
                <option key={index}>{item}</option>
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
