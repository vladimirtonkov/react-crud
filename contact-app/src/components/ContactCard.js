import React from "react";
import { Link } from 'react-router-dom'
import userAvatar from '../images/avatar.png'
import deleteContactImg from '../images/delete-contact.png'
import editContactImg from '../images/edit.png'

const ContactCard = (props) => {

    const { id, name, email } = props.contact


    return (
        <li className="item" key={id}>
            <img className="item__avatar" src={userAvatar} alt="" />
            <div className="item__info">
                <Link to={`/contact/${id}`} state={{ contact: props.contact }} >
                    <span className="item__name">{name}</span>
                    <span className="item__email">{email}</span>
                </Link>
            </div>
            <Link to={`/edit/${id}`} state={{ contactEdit: props.contact }}>
                <button className="item__btn-edit btn">
                    <img className="item__btn-img" src={editContactImg} alt="delete contact" />
                </button>
            </Link>
            <Link to={`/delete/${id}`} state={{ contactDelete: props.contact }}>
                <button className="item__btn-delete btn">
                    <img className="item__btn-img" src={deleteContactImg} alt="delete contact" />
                </button>
            </Link>
        </li >
    )
}

export default ContactCard


//onClick={() => props.getContactId(id)}