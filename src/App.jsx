import React from 'react';
import { Container } from 'react-bootstrap';
import MiApi from './assets/components/MiApi';
import Footer from './assets/components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Container className="bg-light py-4">
        <h1 className="text-center text-primary mb-4">Información de Sismos</h1>
        <MiApi />
      </Container>
      <Footer />
    </div>
  );
}

export default App;