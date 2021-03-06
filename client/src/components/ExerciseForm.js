import React, { Component } from 'react';

//import Modal from 'react-modal';
import {
  Modal,
  Button,
  FormGroup,
  ControlLabel,
  FormControl,
} from 'react-bootstrap';


export default class ExerciseForm extends Component {
  constructor(props) {
    super(props);
    this.getOptions = this.getOptions.bind(this);
    this.state = {
      modalIsOpen: false,
      isValidData: false,
      categories: [
        { id: 1, name: "Muu kategoria" },
        { id: 2, name: "Musical" },
        { id: 3, name: "Warm-Up" },
        { id: 4, name: "Kokoelma" }
      ]
    };
  }

  //  const App = (props) => {
  //    const { categories } = props;
  getOptions = () =>
    this.state.categories.map(c => <option key={c.id} value={c.name}>{c.name}</option>);

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
      title: this.input.value,
      description: this.description.value.split(","),
      category: this.category.value
    });
    this.closeModal();
  }

  validateHandler = () => {
    this.setState({ ...this.state, isValidData: !!(this.input.value && this.description.value && this.category.value) })
  }

  componentDidMount() {
    this.setState({ isValidData: false });
  }

  render() {
    const { title = "", description = [], category = "" } = this.props.data;

    return (
      <Modal show={this.state.modalIsOpen} onHide={this.closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>{(!title) ? "Lisää tekniikka" : "Muokkaa tekniikkaa"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <FormGroup>
              <ControlLabel>Tekniikka</ControlLabel>
              <FormControl
                componentClass="input"
                placeholder="Kirjoita tähän tekniikan otsikko"
                inputRef={(ref) => { this.input = ref }}
                defaultValue={title}
                onChange={this.validateHandler}>
              </FormControl>
            </FormGroup>
            <FormGroup>
              <ControlLabel>Kuvaus</ControlLabel>
              <FormControl
                componentClass="textarea"
                placeholder="Kirjoita tähän tekniikan kuvaus"
                inputRef={(ref) => { this.description = ref }}
                defaultValue={description.join()}
                onChange={this.validateHandler}>
              </FormControl>
            </FormGroup>
            <FormGroup>
              <ControlLabel>Kategoria</ControlLabel>
              <FormControl
                componentClass="select"
                placeholder="Avaa valikko ja valitse..."
                inputRef={(ref) => { this.category = ref }}
                defaultValue={category}
                onChange={this.validateHandler}>
                <option key={0} value="">Valitse</option>
                {this.getOptions()}
              </FormControl>
            </FormGroup>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.onSaveClick} bsStyle="info" disabled={!this.state.isValidData}>Tallenna</Button>
          <Button onClick={this.closeModal}>Sulje</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

