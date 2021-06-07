import React from 'react'
import '../css/item-list.css'

class Item extends React.Component {
    constructor() {
        super();

        this.handleRemove = this.handleRemove.bind(this);
    };

    formatCurrency(num) {
        if (num) {
            return '$' + num.toFixed(2);
        }
    }

    handleRemove(e) {
        this.props.removeItem(e.target.id);
    }

    render () {
        const { item, qty, units, price, total, isTotal, id } = this.props;

        const itemClass = isTotal ? "list-item list-total" : "list-item";

        return (
            <li className={itemClass}> 
                <div className="sub-item sub-item--item">{item}</div>
                <div className="sub-item sub-item--qty">{qty}</div>
                <div className="sub-item sub-item--units">{units}</div>
                <div className="sub-item sub-item--price">{this.formatCurrency(price)}</div>
                <div className="sub-item sub-item--total">{this.formatCurrency(total)}</div>
                {!isTotal && <button className="sub-item sub-item--delete" id={id} onClick={this.handleRemove}>
                    <svg id={id} xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                    </svg>
                </button>
                }
            </li>
        )
    }
};

export default Item
 