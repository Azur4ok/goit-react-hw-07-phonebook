import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './slices/contacts';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});

