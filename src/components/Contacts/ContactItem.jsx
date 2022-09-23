import PropTypes from "prop-types";
import { Button } from "components/commonStyles";
import {WrapperContact, NameContact} from './Contacts.styled'
export const ContactItem = ({ name, number, deleteContact}) => {
     return (
         <>
             <WrapperContact>
                 <NameContact>{name}: </NameContact>
                 <span>{number}</span>
             </WrapperContact> 
         <Button  type="button" onClick={() => deleteContact(name)}>Delete</Button>
   </>
  );
}

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    deleteContact: PropTypes.func.isRequired
};