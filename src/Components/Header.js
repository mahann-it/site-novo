import React, { Component } from 'react';


class Header extends Component {
  render() {
    if(this.props.data){
        var name = this.props.data.name;
        var occupation = this.props.data.occupation;
        var description = this.props.data.description;
        var city = this.props.data.address.city;
        var networks = this.props.data.social.map(function(network){
          return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
        });
    }
    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Inicio</a></li>
            <li><a className="smoothscroll" href="#portfolio">Serviços</a></li>
            <li><a className="smoothscroll" href="#testimonials">Parceiros</a></li>
            <li><a className="smoothscroll" href="#contact">Contatos</a></li>
            <li><a className="smoothscroll" href="#about">Sobre</a></li>
	         <li><a className="smoothscroll" href="#resume">Resumo</a></li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">{name}</h1>
            <h3>Somos uma empresa especializada em transforma ideias em soluções digitais conforme a necessidade de cada cliente. Cada empresa possui necessidades específicas, sejam operacionais ou de negócios. Porém, desenvolver uma solução eficaz, dentro do tempo adequado, com mão-de-obra especializada e tecnologia atualizada é nossa missão.</h3>
            <hr />
            <ul className="social">
          {networks}
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
