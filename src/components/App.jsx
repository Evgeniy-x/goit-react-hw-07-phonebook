import { useDispatch, useSelector } from 'react-redux';
import ContactForm from './Phonebook/ContactForm.jsx';
import ContactList from './Phonebook/ContactList.jsx';
import Filtre from './Phonebook/Filter.jsx';
import { selectError, selectIsLoading } from '../redux/selectors.js';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contactsOperation.js';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm> </ContactForm>
      <h2>Contacts</h2>
      <Filtre />
      {isLoading && !error && (
        <b style={{ marginLeft: 70 }}>Request in progress...</b>
      )}
      {error && (
        <b style={{ marginLeft: 70 }}>
          The operation failed with error: ${error}
        </b>
      )}
      {!isLoading && !error && <ContactList />}
    </>
  );
};
