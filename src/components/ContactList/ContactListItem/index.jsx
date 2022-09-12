import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import styles from './ContactListItem.module.css';
import { fetchRemoveContact } from './../../../redux/thunks/index';

export const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();
  const onClickDelete = () => {
    if (window.confirm('Are you sure to delete this contact')) {
      dispatch(fetchRemoveContact(contact.id));
    }
  };

  return (
    <li className={styles.list}>
      <span className={styles.text}>
        {contact.name}: {contact.phone}
      </span>
      <button className={styles.button} onClick={onClickDelete}>
        delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    createdAt: PropTypes.string,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};
