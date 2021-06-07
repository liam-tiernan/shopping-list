import React from 'react'
import '../css/item-list.css'

class ListTotal extends React.Component {
    constructor() {
        super();
        this.state = {}
    };

    render () {
        const { item, price, total } = this.props;
        return (
            <div className="list-total">
                <div className="sub-item sub-item--item">{item}</div>
                <div className="sub-item sub-item--price">{price}</div>
                <div className="sub-item sub-item--total">{total}</div>
            </div>
        )
    }
};

export default ListTotal
 