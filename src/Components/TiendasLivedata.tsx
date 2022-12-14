import { Formik, Form } from 'formik';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Datefield from '../Forms/Datefield';
import { tiendasDTO } from '../Models/tiendas';


function TiendasLivedata(props: tiendasDTO) {
  return (

    <Card className="text-center" style={{ width: '10rem', marginBottom: '5px', marginLeft: '10px' }}>
      <Card.Header>{props.nombre_corto}</Card.Header>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>{props.ventas}</Card.Title>
        <Card.Text>

          <Formik initialValues={
            { desde: new Date() }
          }
            onSubmit={
              value => {
                console.log(value)
              }
            }
          >
            <Form>
              <div className='col-auto'>
                <Datefield fieldname='desde' displayname='Desde' />
              </div>
              <div className='col-auto'>
                <Datefield fieldname='hasta' displayname='Hasta' />
              </div>

            </Form>

          </Formik>
        </Card.Text>
        <Button variant="primary">Detalles</Button>
      </Card.Body>
      <Card.Footer className="text-muted">{props.horas}</Card.Footer>
    </Card>
  );
}

export default TiendasLivedata;