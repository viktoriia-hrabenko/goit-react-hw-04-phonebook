import PropTypes from 'prop-types';

export const Filter = ({ filter, changeFilterInput }) => {
        return (
            <label>
                <input
                    type="text"
                    name={filter}
                    onChange={changeFilterInput}
                    placeholder="Find contacts by name"
                />
            </label>
        )
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  changeFilterInput: PropTypes.func.isRequired,
};