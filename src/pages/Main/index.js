import React, { Component } from 'react';
import './styles.scss';
import { Container, Card, Row, Button } from 'react-bootstrap';
import firebase from 'firebase';
import Header from '../../components/Header';

class Main extends Component {
  state = {
    movies: [],
  };

  loadMovie = async () => {
    const db = firebase.firestore();

    db.collection('movies')
      .orderBy('name')
      .get()
      .then(querySnapShot => {
        querySnapShot.forEach(doc => {
          this.setState({ movies: [...this.state.movies, doc.data()] });
        });
      });
  };

  componentDidMount() {
    this.loadMovie();
  }

  render() {
    return (
      <>
        <Header />
        <Container className="container">
          <h1>Movie Now</h1>
          <Row>
            {this.state.movies.map(m => (
              <Card className="card">
                <Card.Img variant="top" src={m.url_picture} />
                <Card.Body>
                  <Card.Title
                    style={{
                      fontSize: 18,
                      fontWeight: 'bold',
                      textAlign: 'center',
                    }}
                  >
                    {m.name}
                  </Card.Title>
                  <Card.Text>{m.description}</Card.Text>
                  <Button variant="outline-dark">Watch</Button>
                </Card.Body>
              </Card>
            ))}
          </Row>
        </Container>
      </>
    );
  }
}

export default Main;
