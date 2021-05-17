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
                <div className="header-item item-section">Item</div>
                <div className="header-item qty-section">Qty</div>
                <div className="header-item units-section">Units</div>
                <div className="header-item price-section">Price</div>
                <div className="header-item total-section">Total</div>
            </div>
        )
    }
};

export default ListHeader
 