import React, { Component } from 'react';
import { PanelGroup, Panel } from 'react-bootstrap';
import CategoryEditListItem from './CategoryEditListItem';

export default class CategoryEditList extends Component {

  render() {
    const { categories, onEditClick, onDeleteClick } = this.props;

    return (
      <Panel>
        {categories.length ?
          <PanelGroup id="Haitari-soi">
            {categories.map((item) =>
              <CategoryEditListItem
                key={item.id} {...item}
                onEdit={() => onEditClick(item)}
                onDelete={() => onDeleteClick(item)}
              />)}
          </PanelGroup>
          :
          <div>Yhtään kategoriaa ei ole vielä lisätty</div>
        }
      </Panel>
    )
  }
}
