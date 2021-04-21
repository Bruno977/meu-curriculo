import React from 'react'

import {NavigationBar} from './style'

export default function NavBar(){
    return(
        <NavigationBar>
            <nav>
                <h4>Inicio</h4>
                <ul>
                    <li><a href="#skills">Habilidades</a></li>
                    <li><a href="#education">Educação</a></li>
                    <li><a href="#experience">Experiência</a></li>
                    <li><button>Contatos</button></li>
                </ul>
            </nav>
        </NavigationBar>
    )
}