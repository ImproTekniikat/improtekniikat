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

import CategoryForm from './CategoryForm';
import CategoryEditList from './CategoryEditList';
import AddCategoryButton from './AddCategoryButton';
import Notification from './Notification';
import './CategoryEditingView.css';

class CategoryEditingView extends React.Component {
  constructor(props) {
    super(props);
    this.categoryEditingItem = {};
    this.goHome.bind(this);
    this.addCategory.bind(this);
    this.checkName.bind(this);
    this.saveCategory.bind(this);
    //this.deleteCategory.bind(this);
    this.state = {
      categories: [],
      error: null
    };
  }

  goHome() {
    history.push('/home');
  }

  addCategory = (item) => {
    this.categoryEditingItem = item || { name: "" };
    this.refs.modal.openModal();
    this.forceUpdate();
  }

  checkName = (item) => {
    const same = (this.state.categories.find(n => (n.id !== item.id && n.name === item.name)))
    if (same) {
      this.setState({
        error: "Kategoria on jo olemassa nimellä:   " + item.name
      });
      setTimeout(() => {
        this.setState({ error: null })
      }, 30000)
    }
    else {
      this.saveCategory(item);
    }
  }

  saveCategory = (item) => {
    this.setState({
      categories:
        (!item.id) ? this.state.categories.concat({ ...item, id: Date.now() }) :
          this.state.categories.map((el, idx) => {
            if (el.id === item.id) {
              el.name = item.name;
            }
            return el;
          })
    })
  }

  deleteCategory = (item) => {
    this.setState({ categories: this.state.categories.filter((el) => el.id !== item.id) });
  }


  render() {
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={12}>
              Tällä sivulla voi lisätä ja muokata kategorioita.
            </Col>
          </Row>
          <Row className="show-grid">
            <Col xs={12} md={12}>
              <ButtonToolbar>
                <ButtonGroup>
                  <Button onClick={this.goHome}>Palaa takaisin</Button>
                  <AddCategoryButton onClick={this.addCategory} />
                  <CategoryForm ref="modal" data={this.categoryEditingItem} onSave={this.checkName} />
                </ButtonGroup>
              </ButtonToolbar>
            </Col>
          </Row>
          <Row className="show-grid">
            <Col xs={12} md={12}>
              <h1>Kategoriat</h1>
              <Notification message={this.state.error} />
              <CategoryEditList categories={this.state.categories} onEditClick={this.addCategory} onDeleteClick={this.deleteCategory} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default CategoryEditingView;