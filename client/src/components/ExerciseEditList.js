import React, { Component } from 'react';
import { Accordion, Panel } from 'react-bootstrap';
import ExerciseEditListItem from './ExerciseEditListItem';

export default class ExerciseEditList extends Component {

  render() {
    const {exercises, onEditClick, onDeleteClick} = this.props;
    console.log("ExerciseEditList.js: render: exercises", exercises);
    return (
      <Panel>
         {exercises.length ?
         <Accordion>
            {exercises.map((item) =>
                <ExerciseEditListItem
                  key={item.id} {...item}
                  onEdit={() => onEditClick(item)}
                  onDelete={() => onDeleteClick(item)}
                  />)}
          </Accordion>
          :
          <div>Yhtään tekniikkaa ei ole vielä lisätty</div>
          }
        </Panel>
      )
  }
}
// onDelete={() => {console.log("ExcerciseEditList.js: render: return: onDeleteClic(item): ", item); onDeleteClick(item)}}
