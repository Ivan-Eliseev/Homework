import React from 'react'
import Message from "./Message";

const messageData = {
    avatar: 'https://i.imgur.com/geX7lBe.jpg',
    name: 'Алексей',
    message: 'Погнали в доту',
    time: '02:10',
}

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
