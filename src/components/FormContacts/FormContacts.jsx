import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Button } from '../App/App.styled';
import PropTypes from "prop-types";

export default class FormContacts extends Component {
  state = {
    name: '',
    number: '',
  };

nameId = nanoid();
    telId = nanoid();    
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    this.props.onSubmit({ id: nanoid(), name, number });
    this.setState({ name: '' , number:''});
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameId}>Name</label>
        <input
          type="text"
          name="name"
          id={this.nameId}
          value={this.state.name}
          onChange={this.handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor={this.telId}>Number</label>
        <input
          type="tel"
          name="number"
          id={this.telId}
          value={this.state.number}
          onChange={this.handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <Button type="submit">Add contact</Button>
      </form>
    );
  }
}
FormContacts.propTypes = {
  onSubmit: PropTypes.func.isRequired, 
};