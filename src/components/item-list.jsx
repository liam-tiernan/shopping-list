import React from 'react'
import ListHeader from './list-header'
import Item from './item'
import '../css/item-list.css'

class ItemList extends React.Component {
    constructor() {
        super();
        this.state = {}
    };

    calcTotal() {
        const totals = this.props.items.map(item => item.price * item.qty);
        return totals.reduce((total, itemTotal) => total + itemTotal);
    }
    
    render () {
        return (
            <div className="list-container">
                <ListHeader />
                <ul className="list-body">
                    {this.props.items.map((item, i) => 
                        <Item
                            item={item.item}
                            qty={item.qty}
                            units={item.units}
                            price={item.price}
                            total={item.total}
                            isTotal={false}
                            id={i}
                            removeItem={this.props.removeItem}
                        />
                    )}
                    <Item
                        item={'TOTAL'}
                        qty={''}
                        units={''}
                        price={''}
                        total={this.calcTotal()}
                        isTotal={true}
                    />
                </ul>
            </div>
        )
    }
};

export default ItemList
 