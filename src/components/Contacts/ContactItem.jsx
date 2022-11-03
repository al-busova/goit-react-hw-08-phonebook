import PropTypes from "prop-types";
import { Button } from "components/commonStyles";
import { WrapperContact, NameContact } from './Contacts.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsOperations';

export const ContactItem = ({ name, number, id }) => {
    
  const dispatch = useDispatch();

     return (
         <>
             <WrapperContact>
                 <NameContact>{name}: </NameContact>
                 <span>{number}</span>
             </WrapperContact> 
         <Button  type="button" onClick={() => dispatch(deleteContact(id))}>Delete</Button>
   </>
  );
}

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
};