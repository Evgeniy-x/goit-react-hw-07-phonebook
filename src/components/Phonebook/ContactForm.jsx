import css from './Phonebook.module.css';
// import css from './Phonebook.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOperation';

const ContactForm = () => {
  const contactsStore = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  function handeleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    // const form = e.currentTarget.elements;

    const name = form.elements.name.value;
    const number = form.elements.number.value;

    if (
      contactsStore.filter(elem => elem.name === form.elements.name.value)
        ?.length
    ) {
      alert('Вже є');
      return;
    }

    dispatch(addContact({ name, number }));

    form.reset();
  }

  return (
    <form className={css.form} onSubmit={handeleSubmit}>
      <label>
        Name <br />
        <input
          type="text"
          name="name"
          placeholder="Enter name..."
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <label>
        {' '}
        Number <br />
        <input
          type="tel"
          name="number"
          placeholder="Enter number..."
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
