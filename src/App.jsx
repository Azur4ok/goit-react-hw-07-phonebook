import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ContactForm, Filter, ContactList } from './components';
import { fetchContacts } from './redux/thunks/index';
import { isLoaded } from 'redux/slices/contacts';
import styles from './App.module.css';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const status = useSelector(isLoaded);
  console.log(status);

  React.useEffect(() => {
    dispatch(fetchContacts());
    //eslint-disable-next-line
  }, [status]);

  return (
    <div className={styles.app}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {contacts.length ? (
        status === 'loading' ? (
          <div className={styles.notification}>loading...</div>
        ) : (
          <ContactList />
        )
      ) : (
        <h2 className={styles.notification}>Contact list is empty</h2>
      )}
    </div>
  );
};
