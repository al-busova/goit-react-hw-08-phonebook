import { FormContacts } from './FormContacts/FormContacts';
import { ContactList } from 'components/Contacts/ContactsList';
import { FilterContacts } from 'components/Filter/FilterContacts';
import { MainTitle } from './commonStyles';
import { Box } from './Box';

export const App = () => {

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
        <FilterContacts />
        <ContactList/>
      </Box>
    </main>
  );
};
