import PropTypes from 'prop-types';
import { Button } from 'components/commonStyles';
import { WrapperContact, NameContact } from './Contacts.styled';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/contacts/selectorsContacts';
import { deleteContact } from 'redux/contacts/contactsOperations';

export const ContactItem = ({ name, number, id }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      <WrapperContact>
        <NameContact>{name}: </NameContact>
        <span>{number}</span>
      </WrapperContact>
      <Button
        type="button"
        onClick={() => {
          setIsDeleting(true);
          dispatch(deleteContact(id));
          toast('Contact deleted.');
        }}
      >
        {isLoading && isDeleting ? <>Loading...</> : <>Delete</>}
      </Button>
    </>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
