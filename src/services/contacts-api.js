import axios from 'axios';

axios.defaults.baseURL = 'https://64abb3dd9edb4181202e5a01.mockapi.io';

export async function fetchContacts() {
  return await axios.get('/contacts/contacts');
}

export async function addContact({ name, number }) {
  return await axios.post('/contacts/contacts', { name, number });
}

export async function deleteContact(id) {
  return await axios.delete(`/contacts/contacts/${id}`);
}
