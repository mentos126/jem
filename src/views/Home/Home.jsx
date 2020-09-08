import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faExternalLinkAlt, faPrint } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, NavItem, Row, Card } from 'react-materialize'

import MainLayout from '../../components/layout/MainLayout/MainLayout'
import AppFootballFeeds from '../../components/ui/AppFootballFeeds/AppFootbalFeeds'
import AppLogo from '../../components/ui/AppLogo/AppLogo'
import AppSimpleMap from '../../components/ui/AppSimpleMap/AppSimpleMap'
import AppWeather from '../../components/ui/AppWeather/AppWeather'

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

  const openFacebook = () => {
    // Linking
		window.open('//fb.com/share.php?u=http://club.quomodo.com/jem')
  }

  return (
    <MainLayout>
      <>
        <AppLogo/>
        <Row>
          <Col s={12}>
            <blockquote style={{borderLeft: '5px solid #40c4ff'}}>
              Bienvenue sur le site des Jeunes Espoirs Montalbanais ! <br/>
              Nous sommes heureux de vous faire partager nos actualités, nos commentaires, nos photos, et davantage...
            </blockquote>
          </Col>
        </Row>
        <Row>
          <Col m={6}>
            <blockquote style={{borderLeft: '5px solid #40c4ff'}}>
              Les Jeunes Espoirs Montalbanais (JEM) école de football créée en 1986 est réputée pour sa formation des jeunes au  niveau du département du Tarn-et-Garonne.
              Fort de plus de 300 licenciés, le club accueille les enfants de la catégorie U6 (5 ans) à la catégorie Séniors sur la plaine de jeux de Port Canal (stade de Pouty) et le stade du Saulou.
              <br/>
              Téléphone:  
              <br/>
              Adresse postale :
              <br/>
              Mail :
              <br/>
              <FontAwesomeIcon icon={faFacebook} title="Partager la note sur Facebook" onClick={() => openFacebook()}/>
              <FontAwesomeIcon icon={faTwitter} title="Partager la note sur Twitter" /> 
              <FontAwesomeIcon icon={faEnvelope} title="Faites passer l'info ! Envoi de la news par mail" /> 
              <FontAwesomeIcon icon={faPrint} title="Imprimer la news sur un A4" /> 
            </blockquote>
          </Col>
          <Col m={6}>
            <h4 className="red-text text-darken-2 white center">LES PARTENAIRES DU CLUB</h4>
          </Col>
        </Row>
        <Row>
          <Col l={6}>
            <h4 className="red-text text-darken-2 white center">MATCHS DU WEEKEND</h4>
          </Col>
          <Col l={6}>
            <h4 className="red-text text-darken-2 white center">LES PARTENAIRES DU CLUB</h4>
          </Col>
        </Row>
        <Row>
          <Col l={6}>
            <h4 className="red-text text-darken-2 white center">REPORTAGES</h4>
          </Col>
          <Col l={6} m={12} s={12}>
            <h4 className="red-text text-darken-2 white center">SITUATION DU CLUB</h4>
            <AppSimpleMap marker={marker}/>
          </Col>
        </Row>
        <Row>
          <Col l={6}>
            <h4 className="red-text text-darken-2 white center">COMMENTAIRES</h4>
          </Col>
          <Col l={6} m={12} s={12}>
            <h4 className="red-text text-darken-2 white center">MA MÉTÉO</h4>
            <AppWeather latitude={44.0102843} longitude={1.3379906} APIKEY={'8e9391f167c17b3253b145b2a036ffd4'}/>
          </Col>
        </Row>
        <Row>
          <Col s={12}>
            <h4 className="red-text text-darken-2 white center">ACTUS GÉNÉRALES</h4>
            <div className="container">
              <AppFootballFeeds />
            </div>
          </Col>
        </Row>
      </>
    </MainLayout>
  )
}

export default Home
