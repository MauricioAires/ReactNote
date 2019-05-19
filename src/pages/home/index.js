import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import iconVideo from '../../assets/icone-videos.png';
import iconNote from '../../assets/icone-notificacao.png';
import video from '../../assets/video.png';
import note from '../../assets/notes.png';


import "./styles.css";

 class home extends Component {
  render() {
    return(
        <div className="container-home">
           <div className="header">
               <div className="logo">
                   <div>
                        <h1>React Note</h1>
                        <img src={logo} alt=" logo"/>
                    </div>
                    <span>Salve suas videos aulas, crie um lembrete de conteudos. </span>
               </div>
                <Link to="/login">
                    <input className="btn-login" type="submit" value="Login"/>
               </Link>
            </div>
            <main className="main-home">
                <article className="video">
                    <div className="header-article">
                        <strong>
                            Salve os links de video aulas que você já viu, e assista novamente quando quiser. 
                        </strong>
                        <img className="icone-video" src={iconVideo} alt=" videos" />
                    </div>
                    <img className="video-example" src={video} alt="videos"/>
                </article>
                <article className="note">
                    <div className="header-article">
                        <strong>
                            Crie anotações para não esquecer de estudar ou de participar de um evento.  
                        </strong>
                        <img className="icone-video" src={iconNote} alt=" videos" />
                    </div>
                    <img className="note-example" src={note}  alt=" notes"/>
                </article>
            </main>
            <footer>
                <span> 
                    <b>React Note</b> © 2019 - Todos os direitos reservados
                </span>
            </footer>
            
        </div>
    );
  }
}

export default home;