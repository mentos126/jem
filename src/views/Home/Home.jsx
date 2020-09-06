import React from 'react'
import MainLayout from '../../components/layout/MainLayout/MainLayout'
import AppSimpleMap from '../../components/ui/AppSimpleMap/AppSimpleMap'
import Meteo from '../../components/ui/Meteo/Meteo'
import {faExternalLinkAlt, faEnvelope, faPrint} from '@fortawesome/free-solid-svg-icons'
import {faTwitter, faFacebook} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { NavItem } from 'react-materialize'

function Home() {
  const openTo = 'https://www.google.com/maps/place/Jeunes+Espoirs+Montalbanais/@44.0102843,1.3379906,18z/data=!4m8!1m2!2m1!1sRue+Louis+sabatier+Stade+de+Pouty!3m4!1s0x0:0xc6b8bd8d4cfa58!8m2!3d44.0104957!4d1.3380649'
  const marker = {
    position:  [44.0102843, 1.3379906],
    zoom: 14,
    popup: (
      <div className="app-simple-map popup">
        Jeunes Espoirs Montalbanais &nbsp;
        <NavItem href={openTo}>
          <FontAwesomeIcon color="#00b0ff" icon={faExternalLinkAlt} />
        </NavItem>
      </div>
    )
  }

  return (
    <MainLayout>
      <>
        <div className="row">
          <div className="col s12">
            Bienvenue sur le site des Jeunes Espoirs Montalbanais ! Nous sommes heureux de vous faire partager nos actualités, nos commentaires, nos photos, et davantage...
          </div>
        </div>
        <div className="row">
          <div className="col m6">
            <p>
              Les Jeunes Espoirs Montalbanais (JEM) école de football créée en 1986 est réputée pour sa formation des jeunes au  niveau du département du Tarn-et-Garonne.
              Fort de plus de 300 licenciés, le club accueille les enfants de la catégorie U6 (5 ans) à la catégorie Séniors sur la plaine de jeux de Port Canal (stade de Pouty) et le stade du Saulou.
              <br/>
              Téléphone:  
              <br/>
              Adresse postale :
              <br/>
              Mail :
              <br/>
              <div>
                <FontAwesomeIcon icon={faFacebook} title="Partager la note sur Facebook" onmousedown="q_stopPropagation( event );" onclick="wsg_facebook( this ); return false;"/>
                <FontAwesomeIcon icon={faTwitter} title="Partager la note sur Twitter" onmousedown="q_stopPropagation( event );" onclick="wsg_twitter( this ); return false;"/>
                <FontAwesomeIcon icon={faEnvelope} title="Faites passer l'info ! Envoi de la news par mail" onmousedown="q_stopPropagation( event );" onclick="wsg_mail( this ); return false;"/>
                <FontAwesomeIcon icon={faPrint} title="Imprimer la news sur un A4" onmousedown="q_stopPropagation( event );" onclick="wsg_print( this ); return false;"/>
              </div>
            </p>
          </div>
          <div className="col m6">LES PARTENAIRES DU CLUB</div>
        </div>
        <div className="row">
          <div className="col l6">MATCHS DU WEEKEND</div>
          <div className="col l6">LES PARTENAIRES DU CLUB</div>
        </div>
        <div className="row">
          <div className="col l6">Reportages</div>
          <div className="col l6">
            <AppSimpleMap marker={marker}/>
          </div>
        </div>
        <div className="row">
          <div className="col l6">commentaires </div>
          <div className="col l6">
            <Meteo latitude={44.0102843} longitude={1.3379906} APIKEY={'8e9391f167c17b3253b145b2a036ffd4'}/>
          </div>
        </div>
        <div className="row">
          <div className="col s12">ACTUS GÉNÉRALES</div>
        </div>
      </>
    </MainLayout>
  )
}

export default Home
