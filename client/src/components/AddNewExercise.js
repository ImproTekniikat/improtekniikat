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

    // Lassi lisäsi
    import AddNewExerciseForm from './AddNewExerciseForm';
    import ExerciseEditList from './ExerciseEditList';
    import AddExerciseButton from './AddExerciseButton';

class AddNewExercise extends React.Component {
  constructor(props) {
    super(props);
    // Lassi lisäsi
    this.editItem={};
    this.goHome.bind(this);
    // Lassi lisäsi
    this.addExercise.bind(this);
    this.saveExercise.bind(this);
    this.state = {exercises : []};
  }

  goHome() {
    history.push('/home');    }

 // Lassi lisäsi
  addExercise = (item) => {
    this.editItem = item || {title:"", description:[], category:""};
    this.refs.modal.openModal();
    this.forceUpdate();    }
      
  saveExercise = (item) => {
    debugger
    this.setState({exercises:
      (!item.id) ?  this.state.exercises.concat({ ...item, id: Date.now()}) :
                    this.state.exercises.map((el,idx) => {
                      if(el.id === item.id) {
                        el.title = item.title;
                        el.description = item.description;
                        el.category = item.category;
                      }
                      return el;
                    })
    })
//    console.log("TALLENNUS: ");
//    console.log("this.state: ", this.state);
//    debugger
  }

  deleteExcercise = (item) => {
    this.setState({exercises: this.state.exercises.filter((el) => el.id !== item.id)});
  }


  render() {
    return (
      <div>
        <Grid>
        <Row className="show-grid">
            <Col xs={12} md={12}>
              Todo!
            </Col>
          </Row>
          <Row className="show-grid">
            <Col xs={12} md={12}>
              <ButtonToolbar>
                <ButtonGroup>
                <Button onClick={this.goHome}>Palaa takaisin</Button>
                <AddExerciseButton onClick={this.addExercise} />
                <AddNewExerciseForm  ref="modal" data={this.editItem} onSave={this.saveExercise}/>                
                </ButtonGroup>
              </ButtonToolbar>
            </Col>
          </Row>
          <Row className="show-grid">
            <Col xs={12} md={12}>
            <h1>Tekniikat</h1>
            <ExerciseEditList exercises={this.state.exercises} onEditClick={this.addExercise} onDeleteClick={this.deleteExcercise}/>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default AddNewExercise;