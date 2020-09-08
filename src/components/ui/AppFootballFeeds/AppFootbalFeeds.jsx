import React, { useEffect, useState } from 'react'
import { Card, CardTitle, Col, Row } from 'react-materialize'

import './AppFootballFedd.css'

function AppFootballFeeds() {
  const uri = 'https://dwh.lequipe.fr/api/home/classic?path=/Football/&version=1.0&platform=desktop'
  const [feeds, setFeeds] = useState([])

  useEffect(() => {
    fetch(uri).then(response => response.json())
      .then(data => setFeeds(data.content.feed.items))
      .catch(error => {})
  }, [])

  const replaceUrlImage = url => {
    return url.replace('{width}-{height}-{quality}', '224-149-75')
  }

  return (
    <Row className="app-football-feed">
      {feeds &&feeds.slice(0, 15).map(feed => (
        feed.content && feed.link && feed.content.id !== '313' &&
          <Col s={12} key={feed.content.id}>
            <a href={feed.link.web}>
              <Card
                header={<CardTitle style={{width: '224px', display: 'flex', alignItems: 'center'}} image={replaceUrlImage(feed.content.image.url)}/>}
                horizontal
                style={{margin: '2px'}}
              >
                <Row style={{margin: '0'}}>
                  {feed.content.breadcrumb.map((text, textIndex) => 
                    <Col key={textIndex} style={{margin: '2px'}} className="grey-text text-lighten-5 grey darken-4 center-text">
                      {text.text}
                    </Col>)
                  }
                </Row>
                <Row style={{margin: '0'}} className="light-blue-text text-darken-4">
                  {feed.content.title}
                </Row>
              </Card>
            </a>
          </Col>
        )
        )}
    </Row>
  )
}

export default AppFootballFeeds
