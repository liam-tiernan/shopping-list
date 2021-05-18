import React from 'react'
import ListHeader from './list-header'
import Item from './item'
import ListTotal from './list-total'
import '../css/item-list.css'

class ItemList extends React.Component {
    constructor() {
        super();
        this.state = {}
    };


    // add method to calculate and pass props to total
    render () {
        return (
            <div className="list-container">
                <ListHeader />
                <ul className="list-body">
                    {this.props.items.map(item => 
                        <Item
                            item={item.item}
                            qty={item.qty}
                            units={item.units}
                            price={item.price}
                            total={item.total}
                        />
                    )}
                </ul>
                <ListTotal 
                />
            </div>
        )
    }
};

export default ItemList
 