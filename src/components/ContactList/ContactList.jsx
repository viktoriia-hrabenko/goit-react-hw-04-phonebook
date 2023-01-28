import PropTypes from 'prop-types';
import css from './ContactList.module.css'

export const ContactList = ({ contacts, deleteContact }) => {
        return (
            <ul>
                {contacts.map(({ id, name, number }) => {
                    return (
                        <li key={id}>
                            <p>
                                {name}: {number}
                            </p>
                            <button className={css.listDeleteButton} type="button" onClick={() => deleteContact(id)}>
                                Delete
                            </button>
                        </li>
                    );
                })}
            </ul>
        )
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.string,
      id: PropTypes.string,
    })
    ),
    deleteContact: PropTypes.func.isRequired,
};