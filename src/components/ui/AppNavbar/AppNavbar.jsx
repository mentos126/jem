import React from 'react'
import { Icon, Navbar, NavItem, Dropdown } from 'react-materialize';

import logo from './Logo_JEM.jpg'

function AppNavbar() {
  return (
      <Navbar
        className="light-blue accent-2"
        alignLinks="right"
        brand={
          <a style={{height: '100%'}} className="brand-logo" href="/">
            <img style={{height: '100%'}} src={logo} alt="logo jem" />
          </a>
        }
        id="mobile-nav"
        menuIcon={<Icon>menu</Icon>}
        fixed
        options={{
          draggable: true,
          edge: 'left',
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 200,
          preventScrolling: true
        }}
        >
          <NavItem href="/">Accueil</NavItem>
          <NavItem href="components.html">Le Club</NavItem>
          <Dropdown
            id="Dropdown_6"
            options={{
              alignment: 'left',
              autoTrigger: true,
              closeOnClick: true,
              constrainWidth: true,
              container: null,
              coverTrigger: false,
              hover: false,
              inDuration: 150,
              onCloseEnd: null,
              onCloseStart: null,
              onOpenEnd: null,
              onOpenStart: null,
              outDuration: 250
            }}
            trigger={<a href="#!">Entrainements{' '}<Icon right>arrow_drop_down</Icon></a>}
          >
            <a href="/">
              one
            </a>
            <a href="/">
              two
            </a>
            <a href="/">
              three
            </a>
          </Dropdown>
          <NavItem href="components.html">Équipes</NavItem>
          <NavItem href="components.html">Calendrier Hebdomadaire</NavItem>
          <NavItem href="components.html">Convocations</NavItem>
          <NavItem href="components.html">Photos</NavItem>
          <NavItem href="components.html">Documents</NavItem>
          <NavItem href="components.html">Divers</NavItem>
          <NavItem href="components.html">Contact</NavItem>
        </Navbar>
  )
}

export default AppNavbar
