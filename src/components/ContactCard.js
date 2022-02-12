import React from "react";
import { Link } from 'react-router-dom'
import userAvatar from '../images/avatar.png'
import deleteContactImg from '../images/delete-contact.png'

const ContactCard = (props) => {

    const { id, name, email } = props.contact


    return (
        <li className="item" key={id}>
            <img className="item__avatar" src={userAvatar} alt="" />
            <Link to={`/contact/${id}`} >
                <div className="item__info" onClick={() => props.getContact({ name, email })}>
                    <span className="item__name">{name}</span>
                    <span className="item__email">{email}</span>
                </div>
            </Link>
            <button className="item__btn-delete btn" onClick={() => props.getContactId(id)}>
                <img className="item__btn-img" src={deleteContactImg} alt="delete contact" />
            </button>
        </li>
    )
}

export default ContactCard