import { Component } from 'react';
import FormContacts from './FormContacts/FormContacts';
import { ContactList } from 'components/Contacts/ContactsList';
import { FilterContacts } from 'components/Filter/FilterContacts';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  getFilterContacts() {
    const { contacts, filter } = this.state;
    if (!filter) {
      return contacts;
    }
    const normalizedFilter = filter.toLocaleLowerCase();
    const filterContacts = contacts.filter(({ name }) =>
      name.toLocaleLowerCase().includes(normalizedFilter)
    );
    return filterContacts;
  }

  addContact = contact => {
    if (this.isDuplicate(contact)) {
      return alert(`${contact.name} is already in contacts.`);
    }
    this.setState(prev => {
      return {
        contacts: [...prev.contacts, contact],
      };
    });
  };

  deleteContact = name => {
    this.setState(prev => {
      const newContacts = prev.contacts.filter(
        contact => contact.name !== name
      );
      return {
        contacts: newContacts,
      };
    });
  };
  isDuplicate({ name }) {
    const { contacts } = this.state;
    return contacts.find(contact => contact.name === name);
  }

  render() {
    return (
      <>
        <div>
          <h2>Phonebook</h2>
          <FormContacts onSubmit={this.addContact} />
        </div>
        <div>
          <h2>Contacts</h2>
          <FilterContacts
            value={this.state.filter}
            onChange={this.handleChange}
          />
          <ContactList
            contacts={this.getFilterContacts()}
            deleteContact={this.deleteContact}
          />
        </div>
      </>
    );
  }
}
