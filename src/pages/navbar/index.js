import React from 'react'

import {NavigationBar} from './style'

export default function NavBar(){
    return(
        <NavigationBar>
            <h4>Inicio</h4>
            <nav>
                <ul>
                    <li>Habilidades</li>
                    <li>Educação</li>
                    <li>Experiência</li>
                </ul>
                <a href="Contacts">Contatos</a>
            </nav>
        </NavigationBar>
    )
}