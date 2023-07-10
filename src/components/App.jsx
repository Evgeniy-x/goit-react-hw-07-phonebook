import ContactForm from './Phonebook/ContactForm.jsx';
import ContactList from './Phonebook/ContactList.jsx';
import Filtre from './Phonebook/Filter.jsx';

export const App = () => {
  // const [contacts, setContacts] = useState([]);
  // const [filter, setFilter] = useState('');

  // function addContact(name, number) {
  // const contact = {
  //   id: nanoid(),
  //   name,
  //   number,
  // };

  // if (contacts.filter(elem => elem.name === name).length) {
  //   alert('Вже є');
  //   return;
  // }

  // setContacts([contact, ...contacts]);
  // }

  // function getVisibleContacts() {
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter(
  //     contact =>
  //       contact.name.toLowerCase().includes(normalizedFilter) ||
  //       contact.number.toLowerCase().includes(normalizedFilter)
  //   );
  // }

  // useEffect(() => {
  //   const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
  //   if (parsedContacts) {
  //     setContacts(parsedContacts);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const visibleContacts = getVisibleContacts();

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm> </ContactForm>
      <h2>Contacts</h2>
      <Filtre
      // onChange={e => setFilter(e.currentTarget.value)}
      ></Filtre>

      <ContactList
      // contacts={visibleContacts}
      // onDeleteContact={deleteContact}
      ></ContactList>
    </>
  );
};
