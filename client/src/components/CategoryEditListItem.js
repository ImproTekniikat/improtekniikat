import React, { Component } from 'react';
import { Panel, ButtonToolbar, Button } from 'react-bootstrap';

export default class CategoryEditListItem extends Component {
  render() {
    const { id, name, onEdit, onDelete } = this.props;
    return (
      <Panel eventKey={id}>
        <Panel.Heading>
          <Panel.Title toggle>{name}</Panel.Title>
        </Panel.Heading>
        <Panel.Body collapsible>
          <ButtonToolbar>
            <Button onClick={onEdit} bsStyle="info">Edit</Button>
            <Button onClick={onDelete} bsStyle="danger">Delete</Button>
          </ButtonToolbar>
        </Panel.Body>
      </Panel>
    )
  }
}
