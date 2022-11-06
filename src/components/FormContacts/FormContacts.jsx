import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import { Button, Input, Label } from '../commonStyles';
import { Form } from './FormContacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectIsLoading } from 'redux/contacts/selectorsContacts';
import { addContact } from 'redux/contacts/contactsOperations';

export const FormContacts = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [isAddOn, setIsAddOn] = useState(false);
  const contactItems = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const nameId = nanoid();
  const telId = nanoid();

  useEffect(() => {
    setIsAddOn(false);
  }, [contactItems]);

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const isDuplicate = contactItems.find(
      contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    );
    if (isDuplicate) {
      alert(`${name} is already in contacts.`);
      return;
    }
    dispatch(addContact({ name, number }));
    toast('Contact added.');
    setIsAddOn(true);
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        {' '}
        <Label htmlFor={nameId}>Name</Label>
        <Input
          type="text"
          name="name"
          id={nameId}
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </div>
      <div>
        <Label htmlFor={telId}>Number</Label>
        <Input
          type="tel"
          name="number"
          id={telId}
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </div>
      <Button type="submit">
        {' '}
        {isAddOn && isLoading ? <>Loading...</> : <>Add contact</>}
      </Button>
    </Form>
  );
};
