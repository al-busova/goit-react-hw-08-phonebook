import { ContactItem } from './ContactItem';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { ListContacts, ItemContacts } from './Contacts.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

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
  const filteredContacts = getFilterContacts();
  
  return (
    <ListContacts>
      {filteredContacts.map(contact => (
        <ItemContacts key={contact.id}>
          <ContactItem
            name={contact.name}
            number={contact.number}
            id={contact.id}
          />
        </ItemContacts>
      ))}
    </ListContacts>
  );
};
