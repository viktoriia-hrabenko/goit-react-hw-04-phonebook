import { Component } from 'react';
import PropTypes from 'prop-types';

export class Filter extends Component {
    render() {
        const { filter, changeFilterInput } = this.props;

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
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  changeFilterInput: PropTypes.func.isRequired,
};