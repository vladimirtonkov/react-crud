import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.scss'
import Header from './Header'
import AddContact from './AddContact'
import ContactList from './ContactList'
import ContactDetail from './ContactDetail'


function App() {
  const LOCAL_STORAGE_CONTACTS = 'contacts';
  const LOCAL_STORAGE_CARD = 'card'
  const [contacts, setContacts] = React.useState([]);
  const [card, setCard] = React.useState({})

  function addContactHandler(contact) {
    setContacts([...contacts, contact])
  }

  const removeContactHandler = (id) => {
    const newContacts = [...contacts].filter(contact => contact.id !== id)
    console.log('id', id)
    setContacts(newContacts)
  }

  const getContact = (contact) => {
    console.log('contact', contact)
    setCard({ ...contact })
    console.log('card', card)
  }

  React.useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_CONTACTS))
    if (retriveContacts) setContacts(retriveContacts)
  }, [])

  React.useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_CONTACTS, JSON.stringify(contacts))
  }, [contacts])

  React.useEffect(() => {
    const newCard = JSON.parse(localStorage.getItem(LOCAL_STORAGE_CARD))
    if (newCard) setCard(newCard)
  }, [])

  React.useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_CARD, JSON.stringify(card))
  }, [card])


  return (
    <div className="">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="add" element={<AddContact addContactHandler={addContactHandler} />} />
          <Route path="/" element={<ContactList contacts={contacts} getContactId={removeContactHandler} getContact={getContact} />} />
          <Route path="contact/:id" element={<ContactDetail card={card} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
