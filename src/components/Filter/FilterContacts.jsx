import PropTypes from 'prop-types';
export const FilterContacts = ({ value, onChange }) => {
  return (
    <>
      <label htmlFor="filter">Filter contacts by name</label>
      <input
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
