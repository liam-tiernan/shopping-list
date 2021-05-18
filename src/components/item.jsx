import React from 'react'
import '../css/item-list.css'

class Item extends React.Component {
    constructor() {
        super();
        this.state = {}
    };

    render () {
        const { item, qty, units, price, total } = this.props;

        return (
            <li className="list-item"> 
                <div className="sub-item sub-item--item">{item}</div>
                <div className="sub-item sub-item--qty">{qty}</div>
                <div className="sub-item sub-item--units">{units}</div>
                <div className="sub-item sub-item--price">{price}</div>
                <div className="sub-item sub-item--total">{total}</div>
            </li>
        )
    }
};

export default Item
 