import React, { useState } from 'react';
import { Form, ListGroup } from 'react-bootstrap';

function Buscador({ listadoSismos }) {
    // Estado para almacenar el valor de búsqueda
    const [busqueda, setBusqueda] = useState('');

    // Filtra los sismos según el lugar
    const sismosFiltrados = listadoSismos.filter(sismo =>
        sismo.place.toLowerCase().includes(busqueda.toLowerCase())
    );

    return (
        <>
            {/* Input para realizar la búsqueda */}
            <Form.Control
                type="text"
                placeholder="Buscar por lugar"
                value={busqueda}
                onChange={e => setBusqueda(e.target.value)}
                className="mb-3"
            />
            {/* Muestra la lista de sismos filtrados */}
            <ListGroup>
                {sismosFiltrados.map(sismo => (
                    <ListGroup.Item key={sismo.date + sismo.hour} className="bg-light">
                        <div>
                            <strong>Fecha:</strong> {sismo.date}
                        </div>
                        <div>
                            <strong>Hora:</strong> {sismo.hour}
                        </div>
                        <div>
                            <strong>Lugar:</strong> {sismo.place}
                        </div>
                        <div>
                            <strong>Magnitud:</strong> {sismo.magnitude}
                        </div>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </>
    );
}

export default Buscador;