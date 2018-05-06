import React from 'react';
import { Route, Router } from 'react-router-dom';
import App from './components/App';
import Callback from './components/Callback/Callback';
import AddNewExercise from './components/AddNewExercise';
import CategoryEditingView from './components/CategoryEditingView';
import Layout from './components/Layout';
import Auth from './Auth/Auth';
import history from './history';
import exerciseService from './services/Exercises';

const auth = new Auth();

const handleAuthentication = ({ location }) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
};

const saveNewExercises = exercises => {
  console.log(exercises);
  exercises.forEach(element => {
    const exercise = {
      Name: element.title,
      Description: element.description,
      Category: element.category
    };
    exerciseService.create(exercise).then(response => {
      console.log(response);
    });
  });
};

export const makeMainRoutes = () => {
  return (
    <Router history={history}>
      <div>
        <Route
          exact
          path="/"
          render={props => (
            <Layout auth={auth}>
              <App auth={auth} {...props} />
            </Layout>
          )}
        />
        <Route
          path="/home"
          render={props => (
            <Layout auth={auth}>
              <App auth={auth} {...props} />
            </Layout>
          )}
        />
        <Route
          path="/callback"
          render={props => {
            handleAuthentication(props);
            return <Callback {...props} />;
          }}
        />
        <Route
          path="/addnewexercise"
          render={props => (
            <Layout auth={auth}>
              <AddNewExercise saveNewExercises={saveNewExercises} {...props} />
            </Layout>
          )}
        />
        <Route
          path="/categoryeditingview"
          render={props => (
            <Layout auth={auth}>
              <CategoryEditingView {...props} />
            </Layout>
          )}
        />
      </div>
    </Router>
  );
};
