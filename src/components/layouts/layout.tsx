import React from 'react'
import Sidebar from './sidebar'
import Navbar from './navbar'
import Main from './main'
import { active_rightsidebar_tab, close_overlay } from './ts/help'
import MessageRightbar from './inc/messages'
import NotificationRightbar from './inc/notifications'

const Layout = () => {



    return (
        <div className='layout'>
            <Sidebar />

            <section className="home-section">
                <div className="home-content">
                    <Navbar />
                    <Main />
                </div>
            </section>

            <div className="rbar message-rightbar">
                <MessageRightbar />
            </div>

            <div className="rbar notification-rightbar">
                <NotificationRightbar />
            </div>

            <div className='main_overlay' onClick={close_overlay}>

            </div>
        </div>

    )
}

export default Layout