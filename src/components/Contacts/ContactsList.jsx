import PropTypes from 'prop-types';
import { ContactItem } from './ContactItem';
import {ListContacts, ItemContacts} from './Contacts.styled'
export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ListContacts>
      {contacts.map(contact => (
        <ItemContacts key={contact.id}>
          <ContactItem
            name={contact.name}
            number={contact.number}
            id ={contact.id}
            deleteContact={deleteContact}
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
      deleteContact: PropTypes.func.isRequired,
    })
  ),
};
