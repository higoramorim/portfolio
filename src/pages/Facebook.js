import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Facebook extends Component {
    render() {
        return (
            <React.Fragment>
            <Link to="/"><button className="voltar">Voltar</button></Link>
            <h1>Facebook</h1>
            </React.Fragment>
        )
    }
}

export default Facebook;