import { createAsyncThunk } from '@reduxjs/toolkit';
import * as pnonebookApi from '../../api/phonebook-api';

// export const fetchContacts = () => async dispatch => {
//     dispatch(phonebookActions.fetchContactsRequest());

//     try {
//         const contacts = await pnonebookApi.fetchContacts();
//         dispatch(phonebookActions.fetchContactsSuccess(contacts));
//     } catch (error) {
//         dispatch(phonebookActions.fetchContactsError(error));
//     }
    
// };


export const fetchContacts = createAsyncThunk(
    'contacts/fetchContacts',
    async (_, {rejectWithValue}) => {
        try {
            const contacts = await pnonebookApi.fetchContacts();
            return contacts;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    },
);