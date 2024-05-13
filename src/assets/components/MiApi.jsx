import React, { useState, useEffect } from 'react';
import { Card, ListGroup, Spinner, Row, Col, Button } from 'react-bootstrap';
import Buscador from './Buscador';

function MiApi() {
    // Estado para almacenar el último sismo
    const [ultimoSismo, setUltimoSismo] = useState(null);
    // Estado para almacenar el listado de sismos
    const [listadoSismos, setListadoSismos] = useState([]);
    // Estado para controlar la carga de datos
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Efecto para obtener los datos del último sismo
        fetch('https://api.boostr.cl/earthquake.json')
            .then(response => response.json())
            .then(data => {
                setUltimoSismo(data.data);
                setLoading(false);
            });

        // Efecto para obtener el listado de sismos
        fetch('https://api.boostr.cl/earthquakes/recent.json')
            .then(response => response.json())
            .then(data => {
                // Ordena los sismos por magnitud de mayor a menor
                setListadoSismos(data.data.sort((a, b) => b.magnitude - a.magnitude));
            });
    }, []);

    return (
        <Row>
            <Col md={6}>
                {/* Tarjeta para mostrar el último sismo */}
                <Card className="mb-4">
                    <Card.Header className="bg-danger text-warning">
                        <h4 className="mb-0">Último Sismo</h4>
                    </Card.Header>
                    <Card.Body>
                        {loading ? (
                            // Muestra un spinner mientras se cargan los datos
                            <div className="text-center">
                                <Spinner animation="border" variant="primary" />
                            </div>
                        ) : (
                            <>
                                {/* Muestra la información del último sismo */}
                                <Card.Title>{ultimoSismo.place}</Card.Title>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>
                                        <strong>Fecha:</strong> {ultimoSismo.date}
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <strong>Hora:</strong> {ultimoSismo.hour}
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <strong>Magnitud:</strong> {ultimoSismo.magnitude}
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <strong>Profundidad:</strong> {ultimoSismo.depth}
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <strong>Latitud:</strong> {ultimoSismo.latitude}
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <strong>Longitud:</strong> {ultimoSismo.longitude}
                                    </ListGroup.Item>
                                </ListGroup>
                                {/* Botón para ver más detalles del último sismo */}
                                <Button variant="primary" href={ultimoSismo.info} target="_blank" rel="noopener noreferrer">
                                    Ver más detalles
                                </Button>
                            </>
                        )}
                    </Card.Body>
                </Card>
            </Col>
            <Col md={6}>
                {/* Tarjeta para mostrar el listado de sismos y el buscador */}
                <Card>
                    <Card.Header className="bg-primary text-white">
                        <h4 className="mb-0">Listado de Sismos</h4>
                    </Card.Header>
                    <Card.Body>
                        {/* Renderiza el componente Buscador y le pasa el listado de sismos */}
                        <Buscador listadoSismos={listadoSismos} />
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
}

export default MiApi;