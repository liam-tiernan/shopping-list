import React from 'react'
import ItemList from '../components/item-list.jsx'

class CreateView extends React.Component {
    constructor() {
        super();
        this.state = {items:[]}
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
    };

    addItem(item) {
        item.price = +item.price
        item.qty = +item.qty
        item.total = Math.round((item.price * item.qty) * 100) / 100
        this.setState({items: this.state.items.concat(item)});
    };

    removeItem(id) {
        const array = [...this.state.items];
        array.splice(id, 1);
        this.setState({items: array})
    }
    
    render () {
        return (
            <div>
                <ItemList 
                    items={this.state.items}
                    removeItem={this.removeItem}
                    addItem={this.addItem}
                />
            </div>
        )
    }
}

export default CreateView
