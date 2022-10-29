import { Label, Input } from '../commonStyles';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { getContactsFilter } from 'redux/filterSlice';

export const FilterContacts = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleChange = e => {
    if (e.target.name === 'filter') {
      dispatch(getContactsFilter(e.target.value));
    }
  };

  return (
    <>
      <Label htmlFor="filter">Filter contacts by name</Label>
      <Input
        type="text"
        name="filter"
        id="filter"
        value={filter}
        onChange={handleChange}
      />
    </>
  );
};
