import axios from 'axios';

axios.defaults.baseURL = 'https://6418c98329e7e36438f0596f.mockapi.io/api/v1/';

export async function fetchAllContacts() {
  const res = await axios.get(`contacts`);
  console.log('allContacts', res.data);
  return res.data;
}

export async function addContact({ name, number }) {
  const res = await axios.post(`/contacts`, { name, number });
  console.log('addContact', res.data);
  return res.data;
}

export async function deleteContact(contactId) {
  const res = await axios.delete(`/contacts/${contactId}`);
  console.log('deleteContact', res.data);
  return res.data;
}
