import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { tiendasDTO } from '../Models/tiendas';


function TiendasLivedata(props: tiendasDTO) {
  return (
    <Card className="text-center" style={{ width: '10rem', marginBottom: '5px', marginLeft: '10px' }}>
      <Card.Header>{props.nombre_corto}</Card.Header>
      <Card.Body>
        <Card.Title>{props.ventas}</Card.Title>
        <Card.Text>

        </Card.Text>
        <Button variant="primary">Detalles</Button>
      </Card.Body>
      <Card.Footer className="text-muted">{props.horas}</Card.Footer>
    </Card>
  );
}

export default TiendasLivedata;