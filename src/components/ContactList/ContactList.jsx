import React from 'react';

const ContactList = ({ contacts, toDelete }) => {
  return (
    <ul>
      {contacts.map(contact => {
        return (
          <li key={contact.id}>
            <h3>Name:{contact.name}</h3>
            <p>Number:{contact.number}</p>
            <button onClick={() => toDelete(contact.id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
