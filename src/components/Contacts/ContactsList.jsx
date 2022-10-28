import PropTypes from 'prop-types';
import { ContactItem } from './ContactItem';
import {ListContacts, ItemContacts} from './Contacts.styled'
export const ContactList = ({ contacts }) => {
  const contactsLoc = Object.values(contacts);
  const filterContacts = contactsLoc.filter(contact => contact.id);
  // console.log('contLoc', contactsLoc)
  // console.log('filC', filterContacts)
  // console.log('contacts in list',contacts)
  return (
    <ListContacts>
      {filterContacts.map(contact => (
        <ItemContacts key={contact.id}>
          <ContactItem
            name={contact.name}
            number={contact.number}
            id ={contact.id}
          />
        </ItemContacts>
      ))}
    </ListContacts>
  );
};
ContactList.propTypes = {
  conacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
