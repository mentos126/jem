import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faExternalLinkAlt, faPrint } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import M from 'materialize-css/dist/js/materialize'
import React from 'react'
import { Button, Carousel, Col, Icon, Modal, NavItem, Row, Textarea, TextInput } from 'react-materialize'

import cathycoiff from '../../assets/img/cathycoiff.jpg'
import estrela from '../../assets/img/estrela.jpg'
import garageZabalo from '../../assets/img/garage_zabalo.jpg'
import interSport from '../../assets/img/inter_sport.jpg'
import joseCastro from '../../assets/img/jose_castro.jpg'
import midbat from '../../assets/img/midbat.jpg'
import montauban from '../../assets/img/montauban.jpg'
import silouette from '../../assets/img/silouette.png'
import MainLayout from '../../components/layout/MainLayout/MainLayout'
import AppFootballFeeds from '../../components/ui/AppFootballFeeds/AppFootbalFeeds'
import AppLogo from '../../components/ui/AppLogo/AppLogo'
import AppSimpleMap from '../../components/ui/AppSimpleMap/AppSimpleMap'
import AppWeather from '../../components/ui/AppWeather/AppWeather'

import './Home.scss'

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

  // document.addEventListener('DOMContentLoaded', function() {
  //   const instance = M.Carousel.init(document.querySelectorAll('.carousel'), {})[0];
  //   setInterval(() => {instance.el.M_Carousel.next()}, 1500)
  
  // });

  const openFacebook = () => {
    // Linking
		window.open('//fb.com/share.php?u=http://club.quomodo.com/jem')
  }

  return (
    <MainLayout>
      <React.Fragment>
        <AppLogo/>
        <Row style={{marginTop: '10px'}}>
          <Col className="center" s={12} m={3}>
            <img src={silouette} alt="silouette footballeur"/>
          </Col>
          <Col s={12} m={9}>
            <blockquote style={{borderLeft: '5px solid #40c4ff', textAlign: 'justify '}}>
              Bienvenue sur le site des Jeunes Espoirs Montalbanais ! <br/>
              Nous sommes heureux de vous faire partager nos actualités, nos commentaires, nos photos, et davantage...
            </blockquote>
          </Col>
        </Row>
        <Row>
          <Col m={6}>
            <blockquote style={{borderLeft: '5px solid #40c4ff'}}>
              <p style={{textAlign: 'justify '}}>
                Les Jeunes Espoirs Montalbanais (JEM) école de football créée en 1986 est réputée pour sa formation des jeunes au  niveau du département du Tarn-et-Garonne.
                Fort de plus de 300 licenciés, le club accueille les enfants de la catégorie U6 (5 ans) à la catégorie Séniors sur la plaine de jeux de Port Canal (stade de Pouty) et le stade du Saulou.
              </p>
              <br/><br/>
              Téléphone:  
              <br/>
              Adresse postale :
              <br/>
              Mail :
              <br/><br/>
              <FontAwesomeIcon icon={faFacebook} title="Partager la note sur Facebook" onClick={() => openFacebook()}/> &nbsp;
              <FontAwesomeIcon icon={faTwitter} title="Partager la note sur Twitter" /> &nbsp;
              <FontAwesomeIcon icon={faEnvelope} title="Faites passer l'info ! Envoi de la news par mail" /> &nbsp;
              <FontAwesomeIcon icon={faPrint} title="Imprimer la news sur un A4" /> 
            </blockquote>
          </Col>
          <Col m={6}>
            <h4 className="red-text text-darken-2 white center">LES PARTENAIRES DU CLUB</h4>
            <div className="container center">
              <a href="https://www.montauban.com/">
                <img width="197px" src={montauban} alt="montauban" style={{margin: '0'}}/>
              </a>
              <img width="197px" src={interSport} alt="montauban" style={{margin: '0'}}/>
            </div>
          </Col>
        </Row>
            
        <Row>
          <Col l={6}>
            <h4 className="red-text text-darken-2 white center">MATCHS DU WEEKEND</h4>
            <div className="container center">
              <hr/>
                Aucun évènement
              <hr/>
            </div>
          </Col>
          <Col l={6}>
            <h4 className="red-text text-darken-2 white center">LES PARTENAIRES DU CLUB</h4>
            <div className="grey lighten-2">
              <Carousel
                carouselId="Carousel-2"
                style={{
                  height: '250px'
                }}
                centerImages
                images={[
                  cathycoiff,
                  joseCastro,
                  estrela,
                  garageZabalo,
                  midbat
                ]}
                options={{
                  dist: -100,
                  duration: 200,
                  fullWidth: false,
                  indicators: false,
                  noWrap: false,
                  numVisible: 5,
                  onCycleTo: null,
                  padding: 0,
                  shift: 0
                }}
                />
            </div>
          </Col>
        </Row>
        <Row>
          <Col l={6} m={12} s={12}>
            <h4 className="red-text text-darken-2 white center">REPORTAGES</h4>
            <div className="container center">
              <blockquote style={{borderLeft: '5px solid #40c4ff'}}>
                <blockquote style={{border: 'none'}}>Pour voir les reportage de la JEM</blockquote>
                <Button node="a" waves="light" href="./reportage" className="light-blue accent-3 white-text text-darken-2">
                  cliquez ici <Icon right>keyboard_arrow_right</Icon>
                </Button>
              </blockquote>
            </div>
          </Col>
          <Col l={6} m={12} s={12}>
            <h4 className="red-text text-darken-2 white center">SITUATION DU CLUB</h4>
            <AppSimpleMap marker={marker}/>
          </Col>
        </Row>
        <Row>
          <Col l={6} m={12} s={12}>
            <h4 className="red-text text-darken-2 white center">COMMENTAIRES</h4>
            <div className="container center">
              <blockquote style={{borderLeft: '5px solid #40c4ff'}}>
                <blockquote style={{border: 'none'}}>
                  Laissez ici vos commentaires et suggestions afin d'améliorer le site et le fonctionnement de la JEM
                </blockquote>
                <Modal
                  actions={[
                    <Button modal="close" node="button" className="blue accent-2" waves="light">Ajouter</Button>,
                    <Button modal="close" node="button" className="red accent-2" waves="red">Annuler</Button>
                  ]}
                  bottomSheet={false}
                  fixedFooter={false}
                  header="Ajoutez votre commentaire"
                  id="Modal-0"
                  open={false}
                  options={{
                    dismissible: true,
                    endingTop: '10%',
                    inDuration: 250,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    opacity: 0.5,
                    outDuration: 250,
                    preventScrolling: true,
                    startingTop: '4%'
                  }}
                  trigger={
                    <Button node="a" waves="light" href="./reportage" className="light-blue accent-3 white-text text-darken-2">
                      Commenter...
                    </Button>
                  }
                  >
                    <Row className="container">
                      <form className="col s12">
                          <TextInput id="last-name" s={12} label="Votre nom" validate/>
                          <TextInput email id="email" s={12} label="Votre adresse mail" validate/>
                          <TextInput id="web-site" s={12} label="Votre site web (facultatif)"/>
                          <Textarea id="comment" s={12} label="Votre commentaire" validate/>
                      </form>
                    </Row>

                </Modal>
                
              </blockquote>
            </div>
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
      </React.Fragment>
    </MainLayout>
  )
}

export default Home
