import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
    return (
        <footer className="bg-light py-3 mt-5">
            <Container>
                <Row>
                    <Col md={6}>
                        <h5>Fuentes de datos</h5>
                        <ul className="list-unstyled">
                            <li>
                                API de último sismo:{' '}
                                <a href="https://api.boostr.cl/earthquake.json" target="_blank" rel="noopener noreferrer">
                                    https://api.boostr.cl/earthquake.json
                                </a>
                            </li>
                            <li>
                                API de listado de sismos:{' '}
                                <a href="https://api.boostr.cl/earthquakes/recent.json" target="_blank" rel="noopener noreferrer">
                                    https://api.boostr.cl/earthquakes/recent.json
                                </a>
                            </li>
                        </ul>
                    </Col>
                    <Col md={6}>
                        <h5>Desarrollador</h5>
                        <p>Christopher William Thompson Stone</p>
                        <p>
                            GitHub:{' '}
                            <a href="https://github.com/cwts007" target="_blank" rel="noopener noreferrer">
                                cwts007
                            </a>
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;