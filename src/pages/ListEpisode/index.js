import React, { Component } from 'react';
import './styles.scss';
import { Container, Button } from 'react-bootstrap';
import firebase from 'firebase';
import Header from '../../components/Header';

class ListEpisodes extends Component {
  state = {
    id: this.props.location.state.id,
    name: this.props.location.state.name,
    episodes: [],
  };

  loadEpisode = async () => {
    const db = firebase.firestore();

    const idMovie = this.state.id.trim();

    db.collection(`movies/${idMovie}/episodes`)
      .orderBy('name')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.setState({ episodes: [...this.state.episodes, doc.data()] });
        });
      });
  };

  componentDidMount() {
    this.loadEpisode();
  }

  render() {
    return (
      <>
        <Header />
        <Container className="container">
          <h2>{this.state.name}</h2>

          <div className="list">
            <ul>
              {this.state.episodes.map(e => (
                <li key={e.id}>
                  {e.name}
                  <Button>Watch</Button>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </>
    );
  }
}

export default ListEpisodes;
