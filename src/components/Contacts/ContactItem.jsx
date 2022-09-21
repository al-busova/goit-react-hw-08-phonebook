
export const ContactItem = ({ name, number, deleteContact}) => {
     return (
         <>
             <p>{name}</p>
         <span>{number}</span>
         <button type="button" onClick={() => deleteContact(name)}>Delete</button>
   </>
  );
}