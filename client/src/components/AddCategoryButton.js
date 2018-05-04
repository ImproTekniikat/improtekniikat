import React from 'react'
import { Button } from 'react-bootstrap'

const AddCategoryButton = ({ onClick }) => (
  <Button className="Add-category" onClick={onClick} bsStyle="default">Lisää kategoria</Button>
)

export default AddCategoryButton
