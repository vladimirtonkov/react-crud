import React from "react";
import { Link } from 'react-router-dom'
import user from '../images/user.png'

const ContactDetail = (props) => {

    const { name, email } = props.card
    console.log('name', name)
    return (
        <div className="user">
            <div className="container">
                <Link to="/">
                    <button className="user__btn-home btn">К списку</button>
                </Link>
                <div className="user__inner">
                    <div className="user__avatar">
                        <img className="user__img-avatar" src={user} alt="" />
                    </div>
                    <div className="user__content">
                        <span className="user__name">{name}</span>
                        <p className="user__email">{email}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactDetail