import { ContactItem } from './ContactItem';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectFilter,
  selectIsLoading,
} from 'redux/selectors';
import { ListContacts, ItemContacts } from './Contacts.styled';
import { fetchContacts } from 'redux/contactsOperations';

export const ContactList = () => {
  const contactItems = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filter = useSelector(selectFilter);
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
      {isLoading && contactItems.length === 0 &&  <p>Loading...</p>}
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
