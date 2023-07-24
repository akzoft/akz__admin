import React from 'react'
import { active_main_fullscreen, open_profile_box, open_rightbar, open_sidebar } from './ts/help'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="toggler">
                <i className='ti ti-menu' onClick={open_sidebar}></i>

                <div className="title">Dashboard</div>
            </div>
            <div className="content">
                <div className="icon_list">
                    <div className="full_screen" onClick={active_main_fullscreen}>
                        <i className="ti ti-fullscreen"></i>
                    </div>
                    <div className="notification" onClick={() => open_rightbar('notification-rightbar')}>
                        <i className="ti ti-bell"></i>
                    </div>
                    <div className="dark_mode" onClick={() => open_rightbar('message-rightbar')}>
                        <i className="ti ti-comment-alt"></i>
                    </div>

                </div>
                <div className="profile">
                    <img src={require('../../assets/dr.jpg')} className='profile_img' alt='profile_image' onClick={open_profile_box} />

                    <div className="profile_panel">
                        <ul className='list'>
                            <li><i className="ti ti-user"></i> Profile</li>
                            <li><i className="ti ti-comment-alt"></i> Messages</li>
                            <li><i className="ti ti-bell"></i> Notifications</li>
                            <li><i className="ti ti-settings"></i> Paramètres</li>
                            <li><i className="ti ti-power-off"></i> Déconnexion</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar