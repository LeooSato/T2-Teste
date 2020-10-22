import React from 'react';

import './styles/menu.css';
import { FaFacebookSquare} from 'react-icons/fa';
import { AiFillCheckCircle} from 'react-icons/ai';
import './styles/style.css';
import Form from './components/formpost.js'

const logo = require("./images/logo.svg") as string;
const boneco = require("./images/bonecos.svg") as string;
function App() {
  return (

    <><div className="container-wrapper">
          <header>
              <div className="wrapper-header">
                  <a href="#" className="logo">
                      <img src={logo} alt="Logo"></img></a>
                  <nav className="navbar">
                      <span className="navbar-toggle" id="js-navbar-toggle">
                          <i className="fas fa-bars fa-3x"></i>
                      </span>
                      <div className="menu">
                          <ul className="main-nav">
                              <li>
                                  <a href="#" className="nav-link">FUNCIONALIDADES</a>
                              </li>
                              <li>
                                  <a href="#" className="nav-link">CONTATO</a>
                              </li>
                              <li>
                                  <a href="#" className="nav-link">
                                      <FaFacebookSquare size="50" style={{ fill: 'orange' }}></FaFacebookSquare></a>

                              </li>
                          </ul>
                      </div>
                  </nav>
                  <div className="menu-desktop">
                      <nav className="navigation-menu">
                          <ul className="list-nav">
                              <li>
                                  <a href="#" className="nav-link">FUNCIONALIDADES</a>

                              </li>
                              <li>
                                  <a href="#" className="nav-link">CONTATO</a>
                              </li>
                              <li>
                                  <a href="#" className="nav-link">
                                      <FaFacebookSquare size="50" style={{ fill: 'orange' }}></FaFacebookSquare></a>

                              </li>
                          </ul>
                      </nav>
                  </div>
              </div>
          </header>

          <div className="art">
              <div className="art-img">
                  <img src={boneco} alt=""></img>
              </div>
              <div className="textbox">
                  <h2>
                                          Reconhecimento de imagem com
                  </h2>
                  <h1>
                                      Inteligência Artificial
                  </h1>
              </div>
          </div></div><div className="neovision">
              <h1>NeoVision</h1>
              <h3>Lorem Ipsum é simplesmente uma simulação de texto da indústria
              t              ipográfica e de impressos, e vem sendo utilizado desde o século XVI,
              qu              ando um impressor desconhecido pegou uma bandeja de tipos e os
embaralhou para fazer um livro de modelos de tipos.</h3>

              <h3>Lorem Ipsum é simplesmente uma simulação de texto da indústria
              t              ipográfica e de impressos, e vem sendo utilizado desde o século XVI,
              qu              ando um impressor desconhecido pegou uma bandeja de tipos e os
 embaralhou para fazer um livro de modelos de tipos.</h3>

              <h4>
                  <p><AiFillCheckCircle style={{ fill: 'orange' }} /> Funcionalidade 1</p>
                  <p><AiFillCheckCircle style={{ fill: 'orange' }} /> Funcionalidade 2</p>
                  <p><AiFillCheckCircle style={{ fill: 'orange' }} /> Funcionalidade 3</p>
              </h4>
          </div>

          <div className="footer">
              <h1>Quer conhecer mais sobre o Neovision?</h1>
          <Form></Form>
          </div></>
  )      
}

export default App;
