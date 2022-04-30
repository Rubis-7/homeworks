import React from 'react'
import s from './Message.module.css'

type MessageType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

function Message(props: MessageType) {
    return (
        <div className={s.fon}>
            <img className={s.img} src={props.avatar} alt=""/>
            <div className={s.fonSMS}>
                <div className={s.content}>
                    <span className={s.name}>{props.name}</span><br/>
                    <span className={s.text}>{props.message}</span><br/>
                    <span className={s.time}>{props.time}</span>
                </div>
            </div>
        </div>
    )
}

export default Message
