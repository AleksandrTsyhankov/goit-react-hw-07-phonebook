import { createSelector } from "reselect";

const getContact = state => state.phonebook.items;
const getFilter = state => state.phonebook.filter;
const getFilteredContacts = createSelector([getContact, getFilter], ((contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));
})) 

export {
    getContact,
    getFilter,
    getFilteredContacts,
};