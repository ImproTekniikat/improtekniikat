import React, { Component } from 'react';
import { Panel, PanelGroup } from 'react-bootstrap';
import ExerciseEditListItem from './ExerciseEditListItem';

export default class ExerciseEditList extends Component {

  render() {
    const { exercises, onEditClick, onDeleteClick } = this.props;
    return (
      <Panel>
        {exercises.length ?
          <PanelGroup id="Haitari-soi">
            {exercises.map((item) =>
              <ExerciseEditListItem
                key={item.id} {...item}
                onEdit={() => onEditClick(item)}
                onDelete={() => onDeleteClick(item)}
              />)}
          </PanelGroup>
          :
          <div>Yhtään tekniikkaa ei ole vielä lisätty</div>
        }
      </Panel>
    )
  }
}

