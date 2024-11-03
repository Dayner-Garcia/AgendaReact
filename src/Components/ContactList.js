import React from 'react';

const ContactList = ({ contacts }) => {
  return (
    <div>
      <h2>Lista de Contactos</h2>
      <ul>
        {contacts.length > 0 ? (
          contacts.map((contact, index) => (
            <li key={index}>
              {contact.nombre} {contact.apellido} - {contact.telefono}
            </li>
          ))
        ) : (
          <li>No hay contactos disponibles.</li>
        )}
      </ul>
    </div>
  );
};

export default ContactList;
