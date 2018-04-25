import React from 'react'
import { Button } from 'react-bootstrap'

const AddExerciseButton = ({onClick}) => (
  <Button className="Add-exercise" onClick={onClick} bsStyle="info">Lisää tekniikka</Button>
)

export default AddExerciseButton
