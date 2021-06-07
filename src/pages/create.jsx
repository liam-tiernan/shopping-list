import React from 'react'
import InputLine from '../components/input-line.jsx'
import ItemList from '../components/item-list.jsx'

class CreateView extends React.Component {
    constructor() {
        super();
        this.state = {items:[{
                item:"item1",
                qty: 1,
                units: "stems",
                price: 120,
                total: 120
            },
            {
                item:"item1",
                qty: 1,
                units: "stems",
                price: 120,
                total: 120
            }
        ]}
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.addItem.bind(this);
    };

    addItem(item) {
        item.price = +item.price
        item.qty = +item.qty
        item.total = Math.round((item.price * item.qty) * 100) / 100
        this.setState({items: this.state.items.concat(item)});
    };

    removeItem(id) {
        const array = [...this.state.items];
        array.splice(id);
        this.setState({items: array})
    }
    
    render () {
        return (
            <div>
                <ItemList items={this.state.items} removeItem={this.removeItem}/>
                <InputLine addItem={this.addItem}/>
            </div>
        )
    }
}

export default CreateView
