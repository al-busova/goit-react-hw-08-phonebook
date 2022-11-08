import { Label, Input } from '../commonStyles';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectorsContacts';
import { getContactsFilter } from 'redux/contacts/filterSlice';

export const FilterContacts = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = e => {
    if (e.target.name === 'filter') {
      dispatch(getContactsFilter(e.target.value));
    }
  };

  return (
    <>
      <Label htmlFor="filter">
        <span>Filter contacts by name</span>
        <Input
          type="text"
          name="filter"
          id="filter"
          value={filter}
          onChange={handleChange}
        />{' '}
      </Label>
    </>
  );
};
