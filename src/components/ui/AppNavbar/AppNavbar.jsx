import React from 'react'
import { Navbar, NavItem, Icon } from 'react-materialize';

import logo from './Logo_JEM.jpg'

function AppNavbar() {
  return (
      <Navbar
        className="light-blue accent-2"
        alignLinks="right"
        brand={
          <a className=" brand-logo" href="/">
            <img height="64px" src={logo} alt="logo jem" />
          </a>
        }
        // extendWith={<div className="row">
        //   <div class="col s12">
        //     <span className="flow-text">JEUNES ESPOIRS MONTALBANAIS</span>
        //   </div>
        // </div>}
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
          <NavItem href="components.html">Entrainements</NavItem>
          <NavItem href="components.html">Équipes</NavItem>
          <NavItem href="components.html">Calendrier Hebdomadaire</NavItem>
          <NavItem href="components.html">Convocations</NavItem>
          <NavItem href="components.html">Photos</NavItem>
          <NavItem href="components.html">Documents</NavItem>
          <NavItem href="components.html">Divers</NavItem>
          <NavItem href="components.html">Contact</NavItem>
          {/* <Dropdown
            id="Dropdown_6"
            options={{
              alignment: 'left',
              autoTrigger: true,
              closeOnClick: true,
              constrainWidth: true,
              container: null,
              coverTrigger: true,
              hover: false,
              inDuration: 150,
              onCloseEnd: null,
              onCloseStart: null,
              onOpenEnd: null,
              onOpenStart: null,
              outDuration: 250
            }}
            trigger={<a href="#!">Dropdown{' '}<Icon right>arrow_drop_down</Icon></a>}
          >
            <a href="/">
              one
            </a>
            <a href="/">
              two
            </a>
            <Divider />
            <a href="/">
              three
            </a>
          </Dropdown> */}
        </Navbar>
  )
}

export default AppNavbar
