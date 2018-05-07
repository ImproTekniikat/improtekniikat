import exerciseService from '../services/Exercises';

export function fetchExercises() {
  return dispatch => {
    return exerciseService.getAll().then(response => {
      dispatch(loadExercises(response));
    });
  };
}

export function saveExercises(exercises) {
  return dispatch => {
    console.log(exercises);
    return exercises.forEach(element => {
      const exercise = {
        Name: element.title,
        Description: element.description,
        Category: element.category
      };
      exerciseService.create(exercise).then(response => {
        dispatch(addExercise(response));
      });
    });
  };
}

export function loadExercises(exercises) {
  return {
    type: 'LOAD_EXERCISES',
    exercises: exercises
  };
}

export function addExercise(exercise) {
  return {
    type: 'ADD_EXERCISE',
    exercise: exercise
  };
}
