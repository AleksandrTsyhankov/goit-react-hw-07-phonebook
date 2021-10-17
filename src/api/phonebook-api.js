import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4040';

export async function fetchContacts() {
    const { data } = await axios.get('/contacts');
    return data;
}

export const addContactToServer = (contact) => {
    fetch('http://localhost:4040/contacts', {
        method: 'POST',
        body: JSON.stringify(contact),
        headers: { 'Content-type': 'application/json' },
    });
};

export const deleteContactFromServer = (id) => {
    fetch(`http://localhost:4040/contacts/${id}`, {
        method: 'delete',
    });
};