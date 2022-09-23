import PropTypes from "prop-types";
export const ContactItem = ({ name, number, deleteContact}) => {
     return (
         <>
             <p>{name}</p>
         <span>{number}</span>
         <button type="button" onClick={() => deleteContact(name)}>Delete</button>
   </>
  );
}

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    deleteContact: PropTypes.func.isRequired
};