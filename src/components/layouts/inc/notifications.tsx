import React from 'react'
import { active_rightsidebar_tab } from '../ts/help'

const NotificationRightbar = () => {
    return (
        <div>
            <div className="notificiation-navigation">
                <h5 id='0' className='tab-item active' onClick={(e: any) => active_rightsidebar_tab(e, 0)}>Nouveau</h5>
                <h5 id='1' className='tab-item' onClick={(e: any) => active_rightsidebar_tab(e, 1)}>Lues</h5>
                <h5 id='2' className='tab-item' onClick={(e: any) => active_rightsidebar_tab(e, 2)}>Historiques</h5>
            </div>
            <div className="notificiation-container">

            </div>
        </div>
    )
}

export default NotificationRightbar