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
                <div className="sub-item">{item}</div>
                <div className="sub-item">{qty}</div>
                <div className="sub-item">{units}</div>
                <div className="sub-item">{price}</div>
                <div className="sub-item">{total}</div>
            </li>
        )
    }
};

export default Item
 