import React from "react";
import { Link } from "react-router-dom";
import ContactCard from './ContactCard'
const ContactList = ({contacts, getContactId, getContact }) => {

    // const contacts = [{
    //       id: 1,
    //     name: 'Dima',
    //     email: 's@mail.com'
    // }]
    const renderContactList = contacts.map(contact => {
        return (
            <ContactCard key={contact.id} contact={contact} getContactId={getContactId} getContact={getContact} />
        )
    })

    return (
        <div className="contact-list">
            <div className="container">
                <Link to="add">
                    <button className="contact-list__btn-form_contact btn">
                        Add Contact
                    </button>
                </Link>
                <ul className="contact-list__items">
                    {renderContactList}
                </ul>
            </div>
        </div>
    )
}


export default ContactList