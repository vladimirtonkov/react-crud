import React from "react";
import { Link, useLocation } from 'react-router-dom'
import user from '../images/user.png'

const ContactDelete = (props) => {

    const location = useLocation()
    const { id, name, email } = location.state.contactDelete

    return (
        <div className="user">
            <div className="container">
                <Link to="/">
                    <button className="user__btn-home btn">К списку</button>
                </Link>
                <div className="user__inner">
                    <div className="user__avatar user__avatar--delete">
                        <img className="user__img-avatar" src={user} alt="" />
                    </div>
                    <div className="user__content user__content--center">
                        <span className="user__name">{name}</span>
                        <p className="user__email">{email}</p>
                    </div>
                </div>
                <div className="user__wrapper">
                    <span className="user__text">Вы хотите удалить пользователя ?</span>
                    <div className="user__confirm">
                        <Link to='/'>
                            <button className="user__delete btn" onClick={() => props.getContactId(id)} >Удалить</button>
                        </Link>
                        <Link to='/'>
                            <button className="user__leave btn">Оставить</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactDelete