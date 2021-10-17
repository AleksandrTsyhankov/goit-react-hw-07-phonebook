import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/add');
export const deleteContact = createAction('contacts/delete');
export const filterContacts = createAction('contacts/filter');


/*============================================*/
/*pending*/
// export const fetchContactsRequest = createAction('contacts/fetchContactsRequest');
/*success*/
// export const fetchContactsSuccess = createAction('contacts/fetchContactsSuccess');
/*error*/
// export const fetchContactsError = createAction('contacts/fetchContactsError');