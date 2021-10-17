import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { addContact, deleteContact, filterContacts } from './phonebook-actions';
import { fetchContacts } from './phonebook-operations';

const items = createReducer([], {
    [fetchContacts.fulfilled]: (_, action) => action.payload,
    [addContact]: (state, { payload }) => [...state, payload],
    [deleteContact]: (state, { payload }) => state.filter(({ id }) => id !== payload),
});

const isLoading = createReducer(false, {
    [fetchContacts.pending]: () => true,
    [fetchContacts.fulfilled]: () => false,
    [fetchContacts.rejected]: () => false,
});

const error = createReducer(null, {
    [fetchContacts.rejected]: (_, action) => action.paylaod,
    [fetchContacts.pending]: () => null,
});

const filter = createReducer('', {
    [filterContacts]: (_, { payload }) => payload,
})

export default combineReducers({
    items,
    isLoading,
    error,
    filter,
});
