import React, { Component }from 'react';
import Higor from '../imgs/higor.jpeg';
import { Link } from 'react-router-dom';
import image from '../imgs/softwareEnginnering.jpg';

class Home extends Component {
  render() {
      return (
       <main className="main" style={{ backgroundColor: '#6699ff', marginTop: 100}}>
           <img src={Higor} alt="higor"  style={{borderRadius:50, width: 200}} className="circle responsive-img"/>
           // eslint-disable-next-line jsx-a11y/img-redundant-alt
           <img src={image} alt="image" style={{marginLeft: 150, borderRadius: 50, marginTop: 100}} className="circle responsive-img"/>
       <ul className="collection with-header">
           <li className="collection-header"><h4>Projetos No Github</h4></li>
           <li className="collection-item"><a href="https://github.com/tryber/sd-06-project-shopping-cart/tree/higoramorim-shop-cart" className="btn blue lighten-1">Project shop-cart</a></li>
           <li className="collection-item"><a href="https://github.com/tryber/sd-06-project-movie-card-library-stateful/tree/higoramorim-movie-card-ls" className="btn blue lighten-1">Movie Card Library Stateful</a></li>
           <li className="collection-item"><a href="https://github.com/tryber/sd-06-project-facebook-signup/tree/higoramorim-facebook-project" className="btn blue lighten-1">Facebook clone home page</a></li>
       </ul>
       <ul className="collection with-header">
           <li className="collection-header"><h4>Explicação básica de cada um</h4></li>
           <Link to="/facebook"><li className="collection-item">Facebook clone</li></Link>
           <Link to="/shop-cart"><li className="collection-item">ShopCart</li></Link>
           <Link to="/movie-card"><li className="collection-item">movieCard</li></Link>
           <Link to="/skills"><li className="collection-item">Skills</li></Link>
       </ul>
       <div className="container">

       </div>
       <footer className="page-footer">
           <div className="container">
               <div className="row">
                   
                   <div className="col s12 m4 l6">
                       <h5 className="white-text">Higor H S Amorim</h5>
                       <p className="grey-text text-lighten-4">software engineering</p>
                   </div>
               </div>
           </div>
           <div className="footer-copyright">
               <div className="container">
                   © 2020 Copyright Text
               </div>
           </div>
       </footer>
       </main>
      )
  }
}

export default Home;