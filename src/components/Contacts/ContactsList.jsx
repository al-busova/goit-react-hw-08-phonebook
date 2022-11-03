import { ContactItem } from './ContactItem';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getContacts,
  getError,
  getFilter,
  getIsLoading,
} from 'redux/selectors';
import { ListContacts, ItemContacts } from './Contacts.styled';
import { fetchContacts } from 'redux/contactsOperations';

export const ContactList = () => {
  const contactItems = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getFilterContacts = () => {
    if (!filter) {
      return contactItems;
    }
    const normalizedFilter = filter.toLocaleLowerCase();
    const filterContacts = contactItems.filter(({ name }) =>
      name.toLocaleLowerCase().includes(normalizedFilter)
    );
    return filterContacts;
  };
  const filteredContacts = getFilterContacts();

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {contactItems.length > 0 && (
        <ListContacts>
          {filteredContacts.map(contact => (
            <ItemContacts key={contact.id}>
              <ContactItem
                name={contact.name}
                number={contact.phone}
                id={contact.id}
              />
            </ItemContacts>
          ))}
        </ListContacts>
      )}
    </>
  );
};
