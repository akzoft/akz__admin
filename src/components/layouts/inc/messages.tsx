import React from 'react'
import { active_rightsidebar_tab } from '../ts/help'

const MessageRightbar = () => {

    const Content1 = () => {
        return (
            <div id='0' className='content-item active'>content 1</div>
        )
    }

    const Content2 = () => {
        return (
            <div id='1' className='content-item'>content 2</div>
        )
    }

    const Content3 = () => {
        return (
            <div id='2' className='content-item'>
                content 3
                <h1>ok</h1>
                <h1>ok</h1>
                <h1>ok</h1>
                <h1>ok</h1>
                <h1>ok</h1>
                <h1>ok</h1>
                <h1>ok</h1>
                <h1>ok</h1>
                <h1>ok</h1>
                <h1>ok</h1>
                <h1>ok</h1>
                <h1>ok</h1>
                <h1>ok</h1>
                <h1>ok</h1>
                <h1>ok</h1>
                <h1>ok</h1>
                <h1>ok</h1>
                <h1>ok</h1>
                <h1>ok</h1>
                <h1>ok</h1>
                <h1>ok</h1>
                <h1>ok</h1>
                <h1>ok</h1>
                <h1>ok</h1>
                <h1>ok</h1>
                <h1>ok</h1>
                <h1>ok</h1>
                <h1>ok</h1>
                <h1>ok</h1>
                <h1>ok</h1>
                <h1>ok</h1>
                <h1>ok</h1>
                <h1>ok</h1>
                <h1>ok</h1>
                <h1>ammm</h1>
            </div>
        )
    }


    return (
        <div>
            <div className="message-navigation">
                <h5 id='0' className='tab-item active' onClick={(e: any) => active_rightsidebar_tab(e, 0)}>Note</h5>
                <h5 id='1' className='tab-item' onClick={(e: any) => active_rightsidebar_tab(e, 1)}>Alert</h5>
                <h5 id='2' className='tab-item' onClick={(e: any) => active_rightsidebar_tab(e, 2)}>Chat</h5>
            </div>
            <div className="message-container">
                <Content1 />
                <Content2 />
                <Content3 />
            </div>
        </div>
    )
}

export default MessageRightbar