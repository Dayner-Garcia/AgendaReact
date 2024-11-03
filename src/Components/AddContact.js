import React, { useState } from 'react';

const AddContact = ({ addContact }) => {
  const [contact, setContact] = useState({ nombre: '', apellido: '', telefono: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contact.nombre && contact.apellido && contact.telefono) {
      addContact(contact);
      setContact({ nombre: '', apellido: '', telefono: '' });
    } else {
      alert('Por favor, completa todos los campos.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="nombre"
        value={contact.nombre}
        onChange={handleChange}
        placeholder="Nombre"
        required
      />
      <input
        name="apellido"
        value={contact.apellido}
        onChange={handleChange}
        placeholder="Apellido"
        required
      />
      <input
        name="telefono"
        value={contact.telefono}
        onChange={handleChange}
        placeholder="Teléfono"
        required
      />
      <button type="submit">Agregar Contacto</button>
    </form>
  );
};

export default AddContact;
