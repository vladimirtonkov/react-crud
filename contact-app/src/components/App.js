import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import api from '../api/contacts'
import './App.scss'
import Header from './Header'
import AddContact from './AddContact'
import ContactList from './ContactList'
import ContactDetail from './ContactDetail'
import ContactDelete from './ContactDelete'
import ContactEdit from './ContactEdit'


function App() {

  const [contacts, setContacts] = React.useState([]);
  // const [card, setCard] = React.useState({})

  const retrieveContacts = async () => {
    const response = await api.get('/contacts');

    return response.data
  }

  async function addContactHandler(contact) {

    const response = await api.post('/contacts', contact)
    setContacts([...contacts, response.data])
  }

  const updateContact = async (contact) => {
    console.log('contact', contact.id)
    const response = await api.put(`/contacts/${contact.id}`, contact)
    const { id } = response.data
    setContacts(contacts.map((contact) => {
      return contact.id === id ? { ...response.data } : contact
    }))

  }

  async function removeContactHandler(id) {
    await api.delete(`/contacts/${id}`)
    const newContacts = [...contacts].filter(contact => contact.id !== id)
    setContacts(newContacts)
  }

  // const getContact = (contact) => {
  //   console.log('contact', contact)
  //   setCard({ ...contact })
  //   console.log('card', card)
  // }

  React.useEffect(() => {
    const getAllContacts = async () => {
      const allContacts = await retrieveContacts()
      if (allContacts) setContacts(allContacts)
    }

    getAllContacts()
  }, [])

  React.useEffect(() => {
  }, [contacts])



  return (
    <div className="">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="add" element={<AddContact addContactHandler={addContactHandler} />} />
          <Route path="/" element={<ContactList contacts={contacts} getContactId={removeContactHandler} />} />
          <Route path="contact/:id" element={<ContactDetail />} />
          <Route path="delete/:id" element={<ContactDelete getContactId={removeContactHandler} />} />
          <Route path="edit/:id" element={<ContactEdit updateContact={updateContact} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
