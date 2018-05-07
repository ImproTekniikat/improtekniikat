import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import * as actionCreators from '../actions/index.js';

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
<<<<<<< HEAD
      exercises: [],
      error: null
=======
      exercises: []
>>>>>>> 60535d419aa9a3640daa6ca3f9432c371c872648
    };
  }

  goHome() {
    this.props.saveExercises(this.state.exercises);
    this.props.homeRoute();
  }

  addExercise = item => {
    this.exerciseEditingItem = item || {
      title: '',
      description: [],
      category: ''
    };
    this.refs.modal.openModal();
    this.forceUpdate();
  };

<<<<<<< HEAD
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
=======
  saveExercise = item => {
>>>>>>> 60535d419aa9a3640daa6ca3f9432c371c872648
    this.setState({
      exercises: !item.id
        ? this.state.exercises.concat({ ...item, id: Date.now() })
        : this.state.exercises.map((el, idx) => {
            if (el.id === item.id) {
              el.title = item.title;
              el.description = item.description;
              el.category = item.category;
            }
            return el;
          })
    });
  };

  deleteExcercise = item => {
    this.setState({
      exercises: this.state.exercises.filter(el => el.id !== item.id)
    });
  };

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
<<<<<<< HEAD
                  <ExerciseForm ref="modal" data={this.exerciseEditingItem} onSave={this.checkExercise} />
=======
                  <ExerciseForm
                    ref="modal"
                    data={this.exerciseEditingItem}
                    onSave={this.saveExercise}
                  />
>>>>>>> 60535d419aa9a3640daa6ca3f9432c371c872648
                </ButtonGroup>
              </ButtonToolbar>
            </Col>
          </Row>
          <Row className="show-grid">
            <Col xs={12} md={12}>
              <h1>Tekniikat</h1>
<<<<<<< HEAD
              <Notification message={this.state.error} />
              <ExerciseEditList exercises={this.state.exercises} onEditClick={this.addExercise} onDeleteClick={this.deleteExcercise} />
=======
              <ExerciseEditList
                exercises={this.state.exercises}
                onEditClick={this.addExercise}
                onDeleteClick={this.deleteExcercise}
              />
>>>>>>> 60535d419aa9a3640daa6ca3f9432c371c872648
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state
  };
};

function mapDispatchToProps(dispatch) {
  return {
    homeRoute: () => dispatch(push('/home')),
    saveExercises: exercises =>
      dispatch(actionCreators.saveExercises(exercises))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewExercise);
