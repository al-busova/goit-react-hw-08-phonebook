import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { getContactsFilter } from 'redux/filterSlice';
import { FormContacts } from './FormContacts/FormContacts';
import { ContactList } from 'components/Contacts/ContactsList';
import { FilterContacts } from 'components/Filter/FilterContacts';
import { MainTitle } from './commonStyles';
import { Box } from './Box';

export const App = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleChange = e => {
    if (e.target.name === 'filter') {
      dispatch(getContactsFilter(e.target.value))
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

  return (
    <main>
      <MainTitle>Phonebook</MainTitle>
      <FormContacts />
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
        />
      </Box>
    </main>
  );
};
