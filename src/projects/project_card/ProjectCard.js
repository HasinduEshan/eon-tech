import React from 'react'
import Card from 'react-bootstrap/Card'
import './custom.css'

export default function ProjectCard({ image, title, content }) {
  return (

    <div id='project-card-div'>
      <Card id='project-card'>
      <Card.Img id='project-card-img' variant="top" src={image} />
      <Card.Body>
        <Card.Title id='project-card-title'>{title}</Card.Title>
        <Card.Text id='project-card-text'>
          {content}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>

  )
}
