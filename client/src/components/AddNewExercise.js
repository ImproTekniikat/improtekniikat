import React from 'react';
import history from '../history';

import {
  Grid,
  Row,
  Col,
  ButtonToolbar,
  ButtonGroup,
  Button
} from 'react-bootstrap';

import ExerciseForm from './ExerciseForm';
import ExerciseEditList from './ExerciseEditList';
import AddExerciseButton from './AddExerciseButton';
import Notification from './Notification';
import './AddNewExercise.css';

class AddNewExercise extends React.Component {
  constructor(props) {
    super(props);
    this.exerciseEditingItem = {};
    this.goHome = this.goHome.bind(this);
    this.addExercise = this.addExercise.bind(this);
    this.checkExercise = this.checkExercise.bind(this);
    this.saveExercise = this.saveExercise.bind(this);
    //this.deleteExercise = this.deleteExercise.bind(this);
    this.state = {
      exercises: [],
      error: null
    };
  }

  goHome() {
    history.push('/home');
  }

  addExercise = (item) => {
    this.exerciseEditingItem = item || { title: "", description: [], category: "" };
    this.refs.modal.openModal();
    this.forceUpdate();
  }

  checkExercise = (item) => {
    const same = (this.state.exercises.find(n => (n.id !== item.id && n.title === item.title)))
    if (same) {
      this.setState({
        error: "Tekniikka on jo olemassa otsikolla:   " + item.title
      });
      setTimeout(() => {
        this.setState({ error: null })
      }, 30000)
    }
    else {
      this.saveExercise(item);
    }
  }

  saveExercise = (item) => {
    this.setState({
      exercises:
        (!item.id) ? this.state.exercises.concat({ ...item, id: Date.now() }) :
          this.state.exercises.map((el, idx) => {
            if (el.id === item.id) {
              el.title = item.title;
              el.description = item.description;
              el.category = item.category;
            }
            return el;
          })
    })
  }

  deleteExcercise = (item) => {
    this.setState({ exercises: this.state.exercises.filter((el) => el.id !== item.id) });
  }


  render() {
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={12}>
              Tällä sivulla voit lisätä ja muokata tekniikoita.
            </Col>
          </Row>
          <Row className="show-grid">
            <Col xs={12} md={12}>
              <ButtonToolbar>
                <ButtonGroup>
                  <Button onClick={this.goHome}>Palaa takaisin</Button>
                  <AddExerciseButton onClick={this.addExercise} />
                  <ExerciseForm ref="modal" data={this.exerciseEditingItem} onSave={this.checkExercise} />
                </ButtonGroup>
              </ButtonToolbar>
            </Col>
          </Row>
          <Row className="show-grid">
            <Col xs={12} md={12}>
              <h1>Tekniikat</h1>
              <Notification message={this.state.error} />
              <ExerciseEditList exercises={this.state.exercises} onEditClick={this.addExercise} onDeleteClick={this.deleteExcercise} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default AddNewExercise;