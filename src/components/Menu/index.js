import React from 'react';
import {Link} from 'react-router-dom';
import mediaPlayer from '../../assets/img/mediaPlayer.png';
import './Menu.css';
import Button from '../Button';

function Menu()
{
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="logo" src={mediaPlayer} alt="Neoflix logo"/>
            </Link>            
           <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo Vídeo
            </Button>
        </nav>        
    );
}

export default Menu;