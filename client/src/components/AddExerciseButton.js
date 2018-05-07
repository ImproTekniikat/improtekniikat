import React from 'react'
import { Button } from 'react-bootstrap'

const AddExerciseButton = ({ onClick }) => (
  <Button className="Add-exercise" onClick={onClick} bsStyle="default">Lisää tekniikka</Button>
)

export default AddExerciseButton
