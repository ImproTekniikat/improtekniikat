import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Panel, ButtonToolbar, Button } from 'react-bootstrap';

export default class ExerciseEditListItem extends Component {
  render() {
    const { title, description, category, onEdit, onDelete } = this.props;
    console.log("ExerciseEditListItem: ", title);
    console.log("ExerciseEditListItem: ", description);
    console.log("ExerciseEditListItem: ", category);
    debugger
    return(
        <Panel collapsible>
         <Panel.Heading>{title}</Panel.Heading>
          <ListGroup>
            {description.map((item, index) =>
              <ListGroupItem key={index}>{item}</ListGroupItem>)}
            <ListGroupItem>{category}</ListGroupItem>
          </ListGroup>
          <ButtonToolbar>
            <Button onClick={onEdit} bsStyle="info">Edit</Button>
            <Button onClick={onDelete} bsStyle="danger">Delete</Button>
          </ButtonToolbar>
        </Panel>
      )
  }
}

//          <h4>Kuvaus</h4>
//        <Panel collapsible header={title} >
