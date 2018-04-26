import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Panel, ButtonToolbar, Button } from 'react-bootstrap';

export default class ExerciseEditListItem extends Component {
  render() {
    const { id, title, description, category, onEdit, onDelete } = this.props;
    return (
      <Panel eventKey={id}>
        <Panel.Heading>
          <Panel.Title toggle>{title}</Panel.Title>
        </Panel.Heading>
        <Panel.Body collapsible>
          <ListGroup>
            {description.map((item, index) =>
              <ListGroupItem key={index}>{item}</ListGroupItem>)}
            <ListGroupItem>{category}</ListGroupItem>
          </ListGroup>
          <ButtonToolbar>
            <Button onClick={onEdit} bsStyle="info">Edit</Button>
            <Button onClick={onDelete} bsStyle="danger">Delete</Button>
          </ButtonToolbar>
        </Panel.Body>
      </Panel>
    )
  }
}
