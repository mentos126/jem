import React from 'react'
import MainLayout from '../../components/layout/MainLayout/MainLayout'
import AppSimpleMap from '../../components/ui/AppSimpleMap/AppSimpleMap'
import Meteo from '../../components/ui/Meteo/Meteo'
import {faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function Home() {
  const openTo = 'https://www.google.com/maps/place/Jeunes+Espoirs+Montalbanais/@44.0102843,1.3379906,18z/data=!4m8!1m2!2m1!1sRue+Louis+sabatier+Stade+de+Pouty!3m4!1s0x0:0xc6b8bd8d4cfa58!8m2!3d44.0104957!4d1.3380649'
  const marker = {
    position:  [44.0102843, 1.3379906],
    zoom: 14,
    popup: (
      <div class="app-simple-map popup">
        Jeunes Espoirs Montalbanais &nbsp;
        <a href={openTo} target="_blank">
          <FontAwesomeIcon icon={faExternalLinkAlt} />
        </a>
      </div>
    )
  }



  const child1 = <AppSimpleMap marker={marker}/>
  const child2 = <Meteo latitude={44.0102843} longitude={1.3379906} APIKEY={'8e9391f167c17b3253b145b2a036ffd4'}/>

  return (
    <MainLayout child1={child1} child2={child2} />
  )
}

export default Home
