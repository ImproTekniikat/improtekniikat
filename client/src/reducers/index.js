const defaultState = {
  exercises: []
};

const mainReducer = (state = defaultState, action) => {
  // console.log(action);
  if (action.type === 'LOAD_EXERCISES') {
    return {
      ...state,
      exercises: action.exercises
    };
  } else if (action.type === 'ADD_EXERCISE') {
    return {
      ...state,
      exercises: state.exercises.concat(action.exercise)
    };
  } else {
    return {
      ...state
    };
  }
};

export default mainReducer;
