import React, { Component } from 'react'

//import Modal from 'react-modal';
import { Modal, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap'

export default class CategoryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      isValidData: false
    };
  }
  openModal = () => {
    this.setState({
      modalIsOpen: true,
      isValidData: false
    });
  }
  closeModal = () => {
    this.setState({ modalIsOpen: false });
  }

  onSaveClick = () => {
    this.props.onSave({
      id: this.props.data.id,
      name: this.input.value,
    });
    this.closeModal();
  }

  validateHandler = () => {
    this.setState({ ...this.state, isValidData: !!(this.input.value) })
  }

  componentDidMount() {
    this.setState({ isValidData: false });
  }

  render() {
    const { name = "" } = this.props.data;
    return (
      <Modal show={this.state.modalIsOpen} onHide={this.closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>{(!name) ? "Lisää kategoria" : "Muokkaa kategoriaa"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <FormGroup>
              <ControlLabel>Kategoria</ControlLabel>
              <FormControl
                componentClass="input"
                placeholder="Lisää kategoria"
                inputRef={(ref) => { this.input = ref }}
                defaultValue={name}
                onChange={this.validateHandler}
              />
            </FormGroup>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.onSaveClick} bsStyle="info" disabled={!this.state.isValidData}>Save</Button>
          <Button onClick={this.closeModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}
