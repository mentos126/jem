import React, { Component } from 'react'

import loader from './resources/loading/circles.svg'

import './AppWeather.scss'

class AppWeather extends Component {

  constructor (props) {
    super(props)
    this.state = {
      info: {
        logo: null,
        location: null,
        temperature: null,
        description: null
      },
      previsionHour: [],
      previsionDay: [],
      isLoading: false
    }
  }

  componentDidMount () {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.fetchAll(position.coords.latitude, position.coords.longitude)
      }, () => {
        this.fetchAll(this.props.latitude, this.props.longitude)
      })
    }
  }

  fetchAll (latitude, longitude) {
    this.fetchWeather(latitude, longitude)
    this.fetchCityName(latitude, longitude)
  }

  fetchWeather (latitude, longitude) {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely&units=metric&lang=fr&appid=${this.props.APIKEY}`)
    .then(response => response.json())
    .then(data => this.executeData(data))
    .catch(err => console.log(err))
  }

  fetchCityName (latitude, longitude) {
    fetch(`https://api-adresse.data.gouv.fr/reverse/?lat=${latitude}&lon=${longitude}`)
    .then(response => response.json())
    .then(data => {
      this.setState(state => ({
        ...state, 
        info: {
          ...state.info,
          location: data.features[0].properties.city,
        }
      }))
    })
    .catch(err => console.log(err))
  }

  loadImage = imageName => {
    import(`./resources/logo/${imageName}.svg`)
      .then(image => this.setState(state => ({
        ...state, 
        info: {
          ...state.info,
          logo: image.default
        }
      })))
  }

  executeData (data) {
    this.loadImage(data.current.weather[0].icon)
    const DAYS = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam']
    const hours = []
    const days = []
    const actualHour = new Date().getHours()
    const actualDay = new Date()
    for(let i = 0; i < 7; i++) {
      const hour = actualHour + i * 3;
      hours.push({
        id: i,
        hour: `${(hour % 24).toString().padStart(2, '0')} h`,
        temperature: `${Math.trunc(data.hourly[i * 3].temp)}°`
      })
      days.push({
        id: i,
        day: DAYS[actualDay.getDay()],
        temperature: `${Math.trunc(data.daily[i + 1].temp.day)}°`
      })
      actualDay.setDate(actualDay.getDate() + 1)
  }

  this.setState(state => ({
      ...state,
      info: {
        ...state.info,
        temperature: `${Math.trunc(data.current.temp)}°`,
        description: data.current.weather[0].description
      },
      previsionHour: hours,
      previsionDay: days,
      isLoading: false
    }))
  }

  render () {
    const { isLoading, previsionHour, previsionDay } = this.state
    const { logo, location, description, temperature } = this.state.info
    
    return (
      <div className="app-meteo">
        {isLoading &&
          <div className="overlay-icone-chargement">
            <img src={loader} alt="logo chargement"/>
          </div>
        }
        <div className="bloc-logo-info">
          <div className="bloc-logo">
            {logo && 
              <img src={logo} alt="" className="logo-meteo"/>
            }
          </div>
          <div className="bloc-info">
            <p className="temps">{description}</p>
            <p className="temperature">{temperature}</p>
            <p className="localisation">{location}</p>
          </div>
        </div>
        <div className="heure-bloc-prevision">
          {previsionHour.map(prevision => (
            <div className="bloc-h" key={prevision.id}>
              <p className="heure-nom-prevision">{prevision.hour}</p>
              <p className="heure-prevision-valeur">{prevision.temperature}</p>
            </div>
          ))}
        
        </div>
        <div className="jour-prevision-bloc">
          {previsionDay.map(prevision => (
            <div className="bloc-j" key={prevision.id}>
              <p className="jour-prevision-nom">{prevision.day}</p>
              <p className="jour-prevision-temp">{prevision.temperature}</p>
            </div>
          ))}
        </div>
      </div>
  )}
}

export default AppWeather