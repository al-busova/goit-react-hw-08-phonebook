import PropTypes from 'prop-types';
import { ContactItem } from './ContactItem';
export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <ContactItem
            name={contact.name}
            number={contact.number}
            deleteContact={deleteContact}
          />
        </li>
      ))}
    </ul>
  );
};
ContactList.propTypes = {
  conacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      deleteContact: PropTypes.func.isRequired,
    })
  ),
};
