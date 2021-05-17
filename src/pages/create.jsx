import React from 'react'
import InputLine from '../components/input-line.jsx'
import ItemList from '../components/item-list.jsx'

class CreateView extends React.Component {
    constructor() {
        super();
        this.state = {items:[{
                item:"item1",
                qty: "1",
                units: "stems",
                price: "120",
            }]}
        this.addItem = this.addItem.bind(this);
    };

    addItem(item) {
        this.setState({items: this.state.items.concat(item)});
    };
    
    render () {
        return (
            <div>
                <ItemList items={this.state.items}/>
                {/* <InputLine addItem={this.addItem}/> */}
            </div>
        )
    }
}

export default CreateView
