import React from 'react';

const ContactListItem = ({ contact, onDeleteContact }) => {
  const handleDelete = () => {
    onDeleteContact(contact.id);
  };

  return (
    <li>
      {contact.name} {contact.number}{' '}
      <button onClick={handleDelete} type="button">
        Delete
      </button>
    </li>
  );
};

export default ContactListItem;
