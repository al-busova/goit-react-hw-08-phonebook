import PropTypes from 'prop-types';
import { Label, Input } from '../commonStyles';

export const FilterContacts = ({ value, onChange }) => {
  return (
    <>
      <Label htmlFor="filter">Filter contacts by name</Label>
      <Input
        type="text"
        name="filter"
        id="filter"
        value={value}
        onChange={onChange}
      />
    </>
  );
};
FilterContacts.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
