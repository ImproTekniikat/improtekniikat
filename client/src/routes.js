import React from 'react';
import { Route } from 'react-router-dom';
import App from './components/App';
import Callback from './components/Callback/Callback';
import AddNewExercise from './components/AddNewExercise';
import CategoryEditingView from './components/CategoryEditingView';
import Layout from './components/Layout';
import Auth from './Auth/Auth';
import { ConnectedRouter } from 'react-router-redux';

const auth = new Auth();

const handleAuthentication = ({ location }) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
};

export const makeMainRoutes = history => {
  return (
    <ConnectedRouter history={history}>
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
              <AddNewExercise {...props} />
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
    </ConnectedRouter>
  );
};
