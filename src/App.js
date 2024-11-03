import React, { useState, useEffect } from 'react';
import './App.css';
import AddContact from './Components/AddContact';
import ContactList from './Components/ContactList';

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await fetch('http://www.raydelto.org/agenda.php');
      if (!response.ok) throw new Error('Error al obtener los contactos');
      const data = await response.json();
      setContacts(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const addContact = async (newContact) => {
    try {
      const response = await fetch('https://cors-anywhere.herokuapp.com/http://www.raydelto.org/agenda.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newContact)
      });
  
      if (!response.ok) throw new Error('Error al agregar el contacto');
  
      setContacts((prevContacts) => [...prevContacts, newContact]);
    } catch (error) {
      console.error('Error al agregar contacto:', error);
    }
  };
  
  return (
    <div className="App">
      <h1>Agenda de Contactos</h1>
      <AddContact addContact={addContact} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
