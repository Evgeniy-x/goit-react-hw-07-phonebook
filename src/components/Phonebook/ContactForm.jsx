// import { useState } from 'react';
import css from './Phonebook.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';

const ContactForm = () => {
  const contactsStore = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  function handeleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;

    if (
      contactsStore.filter(elem => elem.name === form.elements.name.value)
        .length
    ) {
      alert('Вже є');
      return;
    }

    dispatch(addContact(form.elements.name.value, form.elements.number.value));
    // onSubmit(name, number);
    form.reset();
  }

  return (
    <form className={css.form} onSubmit={handeleSubmit}>
      <label>
        Name <br />
        <input
          // onChange={e => setName(e.currentTarget.value)}
          // value={name}
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
          // onChange={e => setNumber(e.currentTarget.value)}
          // value={number}
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
