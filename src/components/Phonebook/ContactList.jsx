import css from './Phonebook.module.css';
import { useSelector, useDispatch } from 'react-redux';
import * as contactsOperation from '../../redux/contactsOperation';
import { selectFilter } from '../../redux/selectors.js';

const ContactList = () => {
  const contactsStore = useSelector(state => state.contacts.items);
  console.log(contactsStore);
  const filterStore = useSelector(selectFilter);
  const dispatch = useDispatch();

  const filteredContacts = contactsStore.filter(contact =>
    contact.name?.toLowerCase().includes(filterStore.toLowerCase())
  );

  return filteredContacts?.length > 0 ? (
    filteredContacts.length > 0 ? (
      <ul>
        {filteredContacts.map(({ id, name, number }) => (
          <li key={id}>
            {name}: <span>{number}</span>
            <button
              onClick={() => dispatch(contactsOperation.deleteContact(id))}
              className={css.delete}
              type="button"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    ) : (
      <>No matches</>
    )
  ) : (
    <>
      <p>Add some contacts...</p>
    </>
  );
};

export default ContactList;
