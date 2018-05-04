import React from 'react';
import { Route, Router } from 'react-router-dom';
import App from './components/App';
import Callback from './components/Callback/Callback';
import AddNewExercise from './components/AddNewExercise';
import CategoryEditingView from './components/CategoryEditingView';
import Auth from './Auth/Auth';
import history from './history';

const auth = new Auth();

const handleAuthentication = ({ location }) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
};

export const makeMainRoutes = () => {
  return (
    <Router history={history}>
      <div>
        <Route
          exact
          path="/"
          render={props => <App auth={auth} {...props} />}
        />
        <Route path="/home" render={props => <App auth={auth} {...props} />} />
        <Route
          path="/callback"
          render={props => {
            handleAuthentication(props);
            return <Callback {...props} />;
          }}
        />
        <Route
          path="/addnewexercise"
          render={props => <AddNewExercise {...props} />}
        />
        <Route
          path="/categoryeditingview"
          render={props => <CategoryEditingView {...props} />}
        />
      </div>
    </Router >
  );
};
