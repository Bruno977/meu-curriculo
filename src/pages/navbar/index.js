import React from 'react'

import {NavigationBar} from './style'

export default function NavBar(){
    return(
        <NavigationBar>
            <nav>
                <h4>Inicio</h4>
                <ul>
                    <li><a herf="skills">Habilidades</a></li>
                    <li><a herf="education">Educação</a></li>
                    <li><a herf="experience">Experiência</a></li>
                    <li><button>Contatos</button></li>
                </ul>
            </nav>
        </NavigationBar>
    )
}