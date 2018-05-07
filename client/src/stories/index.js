import React from 'react';

import { storiesOf } from '@storybook/react';
import App from '../components/App';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ExerciseFilter from '../components/ExerciseFilter';
import ExerciseList from '../components/ExerciseList';
import Callback from '../components/Callback/Callback';
import AddNewExercise from '../components/AddNewExercise';
import AddExerciseButton from '../components/AddExerciseButton';
import ExerciseForm from '../components/ExerciseForm';
import CategoryEditingView from '../components/CategoryEditingView';
import CategoryEditList from '../components/CategoryEditList';
import CategoryEditListItem from '../components/CategoryEditListItem';
import AddCategoryButton from '../components/AddCategoryButton';
import CategoryForm from '../components/CategoryForm';
import Notification from '../components/Notification';
import { testdata } from '../components/Testdata';

class AuthMockLogged {
  isAuthenticated() {
    return true;
  }
  username() {
    return 'Testi Henkilö';
  }
}

class AuthMockNotLogged {
  isAuthenticated() {
    return false;
  }
  username() {
    return undefined;
  }
}

const authLogged = new AuthMockLogged();
const authNotLogged = new AuthMockNotLogged();

storiesOf('App', module).add('app, not logged', () => (
  <App auth={authNotLogged} />
));
storiesOf('App', module).add('app, logged', () => <App auth={authLogged} />);

storiesOf('Header', module).add('header, not logged', () => (
  <Header auth={authNotLogged} />
));
storiesOf('Header', module).add('header, logged', () => (
  <Header auth={authLogged} />
));

storiesOf('ExerciseFilter', module).add('exerciseFilter', () => (
  <ExerciseFilter
    selectCategory={() => console.log('select category!')}
    clearSelectedCategory={() => console.log('clear selected category!')}
    categories={['Test1', 'Test2']}
  />
));
storiesOf('ExerciseList', module).add('exerciseList', () => (
  <ExerciseList exercises={testdata} />
));
storiesOf('Footer', module).add('footer', () => <Footer />);
storiesOf('Callback', module).add('callback', () => <Callback />);
storiesOf('AddNewExercise', module).add('addNewExercise', () => (
  <AddNewExercise />
));
storiesOf('AddExerciseButton', module).add('addExerciseButton', () => (
  < AddExerciseButton />
));
storiesOf('ExerciseForm', module).add('exerciseForm', () => (
  < ExerciseForm />
));
storiesOf('CategoryEditingView', module).add('categoryEditingView', () => (
  < CategoryEditingView />
));
storiesOf('CategoryEditList', module).add('categoryEditList', () => (
  < CategoryEditList />
));
storiesOf('CategoryEditListItem', module).add('categoryEditListItem', () => (
  < CategoryEditListItem />
));
storiesOf('AddCategoryButton', module).add('addCategoryButton', () => (
  < AddCategoryButton />
));
storiesOf('CategoryForm', module).add('categoryForm', () => (
  < CategoryForm />
));
storiesOf('Notification', module).add('notification', () => (
  < Notification />
));
