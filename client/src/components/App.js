import React from 'react';
import {
  Grid,
  Row,
  Col,
  ButtonToolbar,
  ButtonGroup,
  Button
} from 'react-bootstrap';
import ExerciseFilter from './ExerciseFilter';
import ExerciseList from './ExerciseList';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import * as actionCreators from '../actions/index.js';

const rowMarginStyle = {
  marginTop: '2em'
};

const getCategories = exercises => {
  const categories = [];
  exercises.forEach(exercise => {
    if (categories.indexOf(exercise.Category) === -1) {
      categories.push(exercise.Category);
    }
  });
  return categories;
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredExercises: this.props.exercises
    };
    this.selectCategory = this.selectCategory.bind(this);
    this.clearSelectedCategory = this.clearSelectedCategory.bind(this);
    this.handleAddNew = this.handleAddNew.bind(this);
    this.handleCategoryEditingView = this.handleCategoryEditingView.bind(this);
  }

  componentDidMount() {
    this.props.fetchExercises();
  }

  componentWillReceiveProps(nextProps) {
    // console.log(nextProps);
  }

  handleAddNew() {
    this.props.addnewexerciseRoute();
  }

  handleCategoryEditingView() {
    this.props.categoryeditingviewRoute();
  }

  selectCategory(index, category) {
    this.setState({
      selectedCategory: category,
      filteredExercises: this.props.exercises.filter(
        ex => ex.Category === category
      ),
      isFiltered: true
    });
  }

  clearSelectedCategory() {
    this.setState({
      selectedCategory: '',
      filteredExercises: this.props.exercises,
      isFiltered: false
    });
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col xs={6} md={9}>
              {isAuthenticated() && (
                <ButtonToolbar>
                  <ButtonGroup>
                    <Button onClick={this.handleAddNew}>Muokkaa tekniikoita</Button>
                    <Button onClick={this.handleCategoryEditingView}>Muokkaa kategorioita</Button>
                  </ButtonGroup>
                </ButtonToolbar>
              )}
            </Col>
            <Col xs={6} md={3}>
              {this.props.exercises && (
                <ExerciseFilter
                  categories={getCategories(this.props.exercises)}
                  selectCategory={this.selectCategory}
                  selectedCategory={this.state.selectedCategory}
                  clearSelectedCategory={this.clearSelectedCategory}
                />
              )}
            </Col>
          </Row>
          <Row className="show-grid" style={rowMarginStyle}>
            <Col xs={12} md={12}>
              {this.props.exercises && (
                <ExerciseList
                  exercises={
                    this.state.isFiltered
                      ? this.state.filteredExercises
                      : this.props.exercises
                  }
                />
              )}
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    exercises: state.appState.exercises
  };
};

function mapDispatchToProps(dispatch) {
  return {
    addnewexerciseRoute: () => dispatch(push('/addnewexercise')),
    categoryeditingviewRoute: () => dispatch(push('/categoryeditingview')),
    fetchExercises: () => dispatch(actionCreators.fetchExercises())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
