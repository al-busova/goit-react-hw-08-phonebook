import { ContactItem } from './ContactItem';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectFilter,
  selectIsLoading,
} from 'redux/contacts/selectorsContacts';
import { ListContacts, ItemContacts } from './Contacts.styled';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { selectIsLoggedIn } from 'redux/auth/selectorsAuth';

export const ContactList = () => {
  const contactItems = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const error = useSelector(selectError);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoggedIn) {
      return;
    }
    dispatch(fetchContacts());
  }, [isLoggedIn, dispatch]);

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
      {isLoading && contactItems.length === 0 && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {contactItems.length > 0 && (
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
      )}
    </>
  );
};
