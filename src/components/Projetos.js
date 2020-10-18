import React from 'react';
import mainLogo from '../imgs/softwareEnginnering.jpg';

const Projetos = () => {
    return (
        <div className="row">
            <div className="col s12 m6 l6">
                <div className="card horizontal">
                    <div className="card-image">
                        <img src={mainLogo} alt="software" />
                    </div>
                    <div className="card-stacked">
                        <div className="card-content">
                            <p>Aqui na Trybe pude além de me desenvolver como profissional, acho que melhorei como pessoa, não teria chegado tão longe sem a ajuda da minha esposa Sandra, meu irmão Vitor, meus colegas de tribo Dilenio e Paulo, Deus nos abençoe</p>
                        </div>
                        <div className="card-action">
                            <a href="#">This is a link</a>
                        </div>
                    </div>
                </div>
            </div>		
        </div>
    );
}

export default Projetos;