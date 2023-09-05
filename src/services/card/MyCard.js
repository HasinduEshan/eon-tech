import Card from 'react-bootstrap/Card';

import './card.css'

function MyCard({title,text,image}) {
  return (
    <div className='card-div'>
      <Card className='card'>
        <Card.Img className='card-img' variant="top" src={image}/>
        <Card.Body>
          <Card.Title className='card-title'>{title}</Card.Title>
          <Card.Text className='card-text'>
            {text}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MyCard;