import React from 'react';

export const Contacts = ({ contacts, handleDelete }) => {
  return (
    <>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <span>{name}:</span>
            <span>{number}</span>
            <button type="button" onClick={() => handleDelete(name)}>
              Delete
            </button>
          </li>
        );
      })}
    </>
  );
};

// const ContactList = ({ contacts, toDelete }) => {
//   return (
//     <ul>
//       {contacts.map(contact => {
//         return (
//           <li key={contact.id}>
//             <h3>Name:{contact.name}</h3>
//             <p>Number:{contact.number}</p>
//             <button onClick={() => toDelete(contact.id)}>Delete</button>
//           </li>
//         );
//       })}
//     </ul>
//   );
// };

// export default ContactList;
