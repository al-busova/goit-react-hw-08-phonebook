
import { ContactItem } from "./ContactItem";
export const ContactList = ({ contacts, deleteContact}) => {
     return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
              < ContactItem name={contact.name} number={contact.number} deleteContact ={deleteContact} />
        </li>
      ))}
    </ul>
  );
}
