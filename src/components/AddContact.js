import React from "react";
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'


const AddContact = ({ addContactHandler }) => {

    const navigate = useNavigate()
    const [inputName, setInputName] = React.useState('')
    const [inputEmail, setInputEmail] = React.useState('')

    // setContacts

    function addNewContact(e) {
        e.preventDefault();
        if (inputName && inputEmail) {
            let contact = {
                id: uuidv4(),
                name: inputName,
                email: inputEmail
            }
            addContactHandler(contact)
            setInputName('')
            setInputEmail('')
            navigate('/')
        }
    }
    return (
        <div className="add-contact">
            <div className="container">
                <div className="add-contact__inner">
                    <span className="add-contact__title">Add New Contact</span>
                    <form className="add-contact__form" onSubmit={addNewContact}>
                        <div className="add-contact__field">
                            <label className="add-contact__label">Name</label>
                            <input className="add-contact__input-data" type="text" placeholder="Name" value={inputName} onChange={(event) => setInputName(event.target.value)} />
                        </div>
                        <div className="add-contact__field">
                            <label className="add-contact__label">Email</label>
                            <input className="add-contact__input-data" type="text" placeholder="Email" value={inputEmail} onChange={(event) => setInputEmail(event.target.value)} />
                        </div>
                        <button className="add-contact__btn-contact btn">Add</button>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default AddContact;