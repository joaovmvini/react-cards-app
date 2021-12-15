import React, { Component } from 'react';

import './style.css';

class CategoryList extends Component {
    
    constructor() {
        super();

        this.state = {
            categories: []
        }

        this._newCategorie = this._newCategories.bind(this);
    }

    componentDidMount() {
        this.props.categories.observe(this._newCategorie);
    }

    componentWillUnmount() {
        this.props.categories.unobserve(this._newCategorie);
    }

    _newCategories(categories) {
        this.setState({...this.state, categories })
    }

    _handleEventInput(event) {
        if (event.key === 'Enter' && event.target.value) {
            const category = event.target.value;

            this.props.addCategory(category);
        }
    }

    render() { 

        return (
            <section className="category-list">
                <ul className="category-list_list">
                    {this.state.categories.map((item, index) => {
                        return (
                            <li key={index} className="category-list_item">{item}</li>
                        )
                    })}
                </ul>
                <input 
                type="text" 
                className="category-list_input" 
                placeholder="Add category..."
                onKeyUp = {this._handleEventInput.bind(this)}
                />
            </section>
        )
    }
}
 
export default CategoryList;