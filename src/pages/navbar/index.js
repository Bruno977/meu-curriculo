import React from 'react'

import {NavigationBar} from './style'

export default function NavBar(){
    return(
        <NavigationBar>
            <nav>
                <h4>Inicio</h4>
                <ul>
                    <li>Habilidades</li>
                    <li>Educação</li>
                    <li>Experiência</li>
                    <li><a href="Contacts">Contatos</a></li>
                </ul>
            </nav>
        </NavigationBar>
    )
}