import React from 'react'
import '../css/list-header.css'

class ListHeader extends React.Component {
    constructor() {
        super();
        this.state = {}
    };

    render () {
        return (
            <div className="list-header">
                <div className="header-item header-item--item">Item</div>
                <div className="header-item header-item--qty">Qty</div>
                <div className="header-item header-item--units">Units</div>
                <div className="header-item header-item--price">Price</div>
                <div className="header-item header-item--total">Total</div>
            </div>
        )
    }
};

export default ListHeader
 