import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ShopCart extends Component {
    render() {
        return (
            <React.Fragment>
            <Link to="/"><button className="voltar">Voltar</button></Link>
            <h1>shop-cart</h1>
            </React.Fragment>
        )
    }
}

export default ShopCart;