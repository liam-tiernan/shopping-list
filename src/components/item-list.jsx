import React from 'react'
import '../css/item-list.css'

class ItemList extends React.Component {
    constructor() {
        super();
        this.state = {}
    };

    render () {

        return (
            <div className="list-container">
                <div className="list-header">
                    <div className="header-item item-section">Item</div>
                    <div className="header-item qty-section">Qty</div>
                    <div className="header-item units-section">Units</div>
                    <div className="header-item price-section">Price</div>
                    <div className="header-item total-section">Total</div>
                </div>
                <ul>
                    {this.props.items.map(item => 
                        <li> 
                        <div>{item.item}</div>
                        <div>{item.qty}</div>
                        </li>
                    )}
                </ul>
                <p>{this.props.items[0].item}</p>
            </div>
        )
    }
};

export default ItemList
 