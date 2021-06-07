import React from 'react'
import '../css/input-line.css'

class InputLine extends React.Component {
    constructor() {
        super();
        this.state = {
            item: "",
            qty: "",
            units: "",
            price: "",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange(e) {
        switch (e.target.name) {
            case "item":
                this.setState({item: e.target.value});
                break;
            case "qty":
                this.setState({qty: e.target.value});
                break;
            case "units":
                this.setState({units: e.target.value});
                break;
            case "price":
                this.setState({price: e.target.value});
                break;
            default:
                break;
        };        
    };

    handleSubmit(e) {
        this.props.addItem(this.state)
        this.setState({
            item: "",
            qty: "",
            units: "",
            price: "",
        });
        e.preventDefault();
    };


    render () {
        return (
            <div className="input-line">
                <form onSubmit={this.handleSubmit} className="input-form">
                    <input type="text" id="item" name="item" onChange={this.handleChange} value={this.state.item} className="input-field" autoComplete='off'/>
                    <input type="number" id="qty" name="qty" onChange={this.handleChange} value={this.state.qty} className="input-field" autoComplete='off'/>
                    <input type="text" id="units" name="units" onChange={this.handleChange} value={this.state.units} className="input-field" autoComplete='off'/>
                    <input type="text" id="price" name="price" onChange={this.handleChange} value={this.state.price} className="input-field" autoComplete='off'/>
                    <button type="submit" id="submit" className="submit-button">+</button>
                </form>
            </div>
        );
    };
};

export default InputLine;
