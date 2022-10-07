import { useState } from 'react';
import { FormContacts } from './FormContacts/FormContacts';
import { ContactList } from 'components/Contacts/ContactsList';
import { FilterContacts } from 'components/Filter/FilterContacts';
import { MainTitle } from './commonStyles';
import { Box } from './Box';
// const CONTACTS = 'contacts';

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  //   componentDidMount() {
  //     const parsedContacts = JSON.parse(localStorage.getItem(CONTACTS));
  //     if (parsedContacts) {
  //       this.setState({ contacts: parsedContacts });
  //     }
  //   }

  //   componentDidUpdate(_, prevState) {
  //     if (this.state.contacts !== prevState.contacts) {
  //       localStorage.setItem(CONTACTS, JSON.stringify(this.state.contacts));
  //   }
  // }

  const handleChange = e => {
    if (e.target.name === 'filter') {
      setFilter(e.target.value);
    }
  };

  const getFilterContacts = () => {
    if (!filter) {
      return contacts;
    }
    const normalizedFilter = filter.toLocaleLowerCase();
    const filterContacts = contacts.filter(({ name }) =>
      name.toLocaleLowerCase().includes(normalizedFilter)
    );
    return filterContacts;
  };

  const addContact = contact => {
    if (isDuplicate(contact)) {
      return alert(`${contact.name} is already in contacts.`);
    }
    setContacts(prev => [...prev, contact]);
  };

  const deleteContact = id => {
    setContacts(prev => {
      const newContacts = prev.filter(contact => contact.id !== id);
      return newContacts;
    });
  };

  const isDuplicate = ({ name }) => {
    return contacts.find(
      contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    );
  };

  return (
    <main>
      <MainTitle>Phonebook</MainTitle>
      <FormContacts onSubmit={addContact} />
      <Box
        color="darkgreen"
        mr="auto"
        ml="auto"
        width="50%"
        fontSize="l"
        textAlign="center"
      >
        <h2>Contacts</h2>
        <FilterContacts value={filter} onChange={handleChange} />
        <ContactList
          contacts={getFilterContacts()}
          deleteContact={deleteContact}
        />
      </Box>
    </main>
  );
};
