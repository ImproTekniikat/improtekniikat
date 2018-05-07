import React from 'react';
import {
  Grid,
  Row,
  Col,
  ButtonToolbar,
  ButtonGroup,
  Button
} from 'react-bootstrap';
import Header from './Header';
import ExerciseFilter from './ExerciseFilter';
import ExerciseList from './ExerciseList';
import { testdata } from './Testdata';
import history from '../history';
import exerciseService from '../services/Exercises';

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
    this.state = { exercises: testdata, filteredExercises: testdata };
    this.selectCategory = this.selectCategory.bind(this);
    this.clearSelectedCategory = this.clearSelectedCategory.bind(this);
    this.handleAddNew = this.handleAddNew.bind(this);
    this.handleCategoryEditingView = this.handleCategoryEditingView.bind(this);
  }

  componentDidMount() {
    exerciseService.getAll().then(response => {
      console.log(response);
      this.setState({ exercises: response, filteredExercises: response });
    });
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  handleAddNew() {
    history.push('/addnewexercise');
  }

  handleCategoryEditingView() {
    history.push('/categoryeditingview');
  }

  selectCategory(index, category) {
    this.setState({
      selectedCategory: category,
      filteredExercises: this.state.exercises.filter(
        ex => ex.Category === category
      )
    });
  }

  clearSelectedCategory() {
    this.setState({
      selectedCategory: '',
      filteredExercises: this.state.exercises
    });
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div>
        <Header auth={this.props.auth} />
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
              <ExerciseFilter
                categories={getCategories(testdata)}
                selectCategory={this.selectCategory}
                selectedCategory={this.state.selectedCategory}
                clearSelectedCategory={this.clearSelectedCategory}
              />
            </Col>
          </Row>
          <Row className="show-grid" style={rowMarginStyle}>
            <Col xs={12} md={12}>
              <ExerciseList exercises={this.state.filteredExercises} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
