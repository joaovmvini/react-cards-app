import React, { Component } from 'react';

import './style.css';

class CategoryList extends Component {

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
                    {this.props.categories.map((item, index) => {
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