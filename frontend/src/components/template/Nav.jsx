import './Nav.css'
import NavItem from './NavItem'
import React from 'react'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <NavItem ref="/" style="fa fa-home" title="Início" />
            <NavItem ref="/users" style="fa fa-users" title="Usuários" />
        </nav>
    </aside>