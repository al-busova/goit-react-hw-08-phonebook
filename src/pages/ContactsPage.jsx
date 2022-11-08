import { FormContacts } from '../components/FormContacts/FormContacts';
import { ContactList } from 'components/Contacts/ContactsList';
import { FilterContacts } from 'components/Filter/FilterContacts';
import { Box } from '../components/Box';

const ContactsPage = () => {
  return (
    <main>
      <FormContacts />
      <Box
        color="darkgreen"
        mr="auto"
        ml="auto"
        width="55%"
        fontSize="m"
        textAlign="center"
      >
        <h2>Contacts</h2>
        <FilterContacts />
        <ContactList />
      </Box>
    </main>
  );
};
export default ContactsPage;