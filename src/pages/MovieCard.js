import React, { Component }from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends Component {
  render() {
		return (
			<React.Fragment>
			<Link to="/"><button className="voltar">Voltar</button></Link>
			<h1>Movie Card</h1>
			</React.Fragment>
		)
	}
}

export default MovieCard;