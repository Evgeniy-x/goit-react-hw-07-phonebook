import { createReducer, combineReducers, createSlice } from '@reduxjs/toolkit';
// import * as contactsAction from './contactsActions';
import { fetchContacts, addContact, deleteContact } from './contactsOperation';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: {
    // Завантаження списку
    [fetchContacts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
    },

    // Додавання контакту
    [addContact.pending](state) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // Видалення контакту
    [deleteContact.pending](state) {
      state.isLoading = true;
    },
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        task => task.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [deleteContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default contactsSlice.reducer;
