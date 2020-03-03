import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Header from '../../components/Header';
import Player from '../../components/Player';

const Watch = () => (
  <>
    <Header />
    <Container>
      <div>
        <div>
          <p>1 - Pilot</p>
        </div>
      </div>
      <div>
        <Player />
      </div>
      <div>
        <Button variant="dark">Back</Button>
        <Link to="/">
          <Button variant="dark">Home</Button>
        </Link>
      </div>
    </Container>
  </>
);

export default Watch;
