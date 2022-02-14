import React from "react";
import { useNavigate, useLocation } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'


const ContactEdit = ({ updateContact }) => {

    const navigate = useNavigate()
    const location = useLocation()
    const { id, name, email } = location.state.contactEdit
    const [inputName, setInputName] = React.useState(name)
    const [inputEmail, setInputEmail] = React.useState(email)


    // setContacts

    function updateNewContact(e) {
        e.preventDefault();
        if (inputName && inputEmail) {
            let contact = {
                id: id,
                name: inputName,
                email: inputEmail
            }
            updateContact(contact)
            setInputName('')
            setInputEmail('')
            navigate('/')
        }
    }
    return (
        <div className="add-contact">
            <div className="container">
                <div className="add-contact__inner">
                    <span className="add-contact__title">Edit Contact</span>
                    <form className="add-contact__form" onSubmit={updateNewContact}>
                        <div className="add-contact__field">
                            <label className="add-contact__label">Name</label>
                            <input className="add-contact__input-data" type="text" placeholder="Name" value={inputName} onChange={(event) => setInputName(event.target.value)} />
                        </div>
                        <div className="add-contact__field">
                            <label className="add-contact__label">Email</label>
                            <input className="add-contact__input-data" type="text" placeholder="Email" value={inputEmail} onChange={(event) => setInputEmail(event.target.value)} />
                        </div>
                        <button className="add-contact__btn-contact btn">Update</button>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default ContactEdit;