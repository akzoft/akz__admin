import { open_dropdown_sub_menu, open_sidebar, remove_all_poppup_panel } from "./ts/help";

const Sidebar = () => {

    return (
        <div className="sidebar" onClick={remove_all_poppup_panel}>
            <div className="logo-details">
                <i className='ti ti-flickr'></i>
                <span className="logo_name">Akzoft</span>

                <i className='ti ti-close' onClick={open_sidebar}></i>
            </div>
            <ul className="nav-links">
                <li>
                    <a href="/#">
                        <i className='ti ti-layout' ></i>
                        <span className="link_name">Dashboard</span>
                    </a>
                    <ul className="sub-menu blank">
                        <li><a className="link_name" href="/#">Category</a></li>
                    </ul>
                </li>

                <li onClick={open_dropdown_sub_menu}>
                    <div className="icon-link">
                        <a href="/#">
                            <i className='ti ti-pin-alt' ></i>
                            <span className="link_name">Posts</span>
                        </a>
                        <i className='ti ti-angle-right arrow' ></i>
                    </div>
                    <ul className="sub-menu">
                        <li><a className="link_name" href="/#">Posts</a></li>
                        <li><a href="/#">Web Design</a></li>
                        <li><a href="/#">Login Form</a></li>
                        <li><a href="/#">Card Design</a></li>
                    </ul>
                </li>

                <li onClick={open_dropdown_sub_menu}>
                    <div className="icon-link">
                        <a href="/#">
                            <i className='ti ti-palette' ></i>
                            <span className="link_name">Category</span>
                        </a>
                        <i className='ti ti-angle-right arrow' ></i>
                    </div>
                    <ul className="sub-menu">
                        <li><a className="link_name" href="/#">Category</a></li>
                        <li><a href="/#">HTML & CSS</a></li>
                        <li><a href="/#">JavaScript</a></li>
                        <li><a href="/#">PHP & MySQL</a></li>
                    </ul>
                </li>

                <li onClick={open_dropdown_sub_menu}>
                    <div className="icon-link">
                        <a href="/#">
                            <i className='ti ti-layout-sidebar-2' ></i>
                            <span className="link_name">Products</span>
                        </a>
                        <i className='ti ti-angle-right arrow' ></i>
                    </div>
                    <ul className="sub-menu">
                        <li><a className="link_name" href="/#">Products</a></li>
                        <li><a href="/#">Web Design</a></li>
                        <li><a href="/#">Login Form</a></li>
                        <li><a href="/#">Card Design</a></li>
                    </ul>
                </li>

                <li onClick={open_dropdown_sub_menu}>
                    <div className="icon-link">
                        <a href="/#">
                            <i className='ti ti-user' ></i>
                            <span className="link_name">Utilisateurs</span>
                        </a>
                        <i className='ti ti-angle-right arrow' ></i>
                    </div>
                    <ul className="sub-menu">
                        <li><a className="link_name" href="/#">Utilisateurs</a></li>
                        <li><a href="/#">Web Design</a></li>
                        <li><a href="/#">Login Form</a></li>
                        <li><a href="/#">Card Design</a></li>
                    </ul>
                </li>

                <li onClick={open_dropdown_sub_menu}>
                    <div className="icon-link">
                        <a href="/#">
                            <i className='ti ti-user' ></i>
                            <span className="link_name">Administrateurs</span>
                        </a>
                        <i className='ti ti-angle-right arrow' ></i>
                    </div>
                    <ul className="sub-menu">
                        <li><a className="link_name" href="/#">Administrateurs</a></li>
                        <li><a href="/#">Web Design</a></li>
                        <li><a href="/#">Login Form</a></li>
                        <li><a href="/#">Card Design</a></li>
                    </ul>
                </li>

                <li onClick={open_dropdown_sub_menu}>
                    <div className="icon-link">
                        <a href="/#">
                            <i className='ti ti-panel' ></i>
                            <span className="link_name">Tools</span>
                        </a>
                        <i className='ti ti-angle-right arrow' ></i>
                    </div>
                    <ul className="sub-menu">
                        <li><a className="link_name" href="/#">Tools</a></li>
                        <li><a href="/#">Web Design</a></li>
                        <li><a href="/#">Login Form</a></li>
                        <li><a href="/#">Card Design</a></li>
                    </ul>
                </li>

                <li>
                    <a href="/#">
                        <i className='ti ti-settings'></i>
                        <span className="link_name">Settings</span>
                    </a>
                    <ul className="sub-menu blank">
                        <li><a className="link_name" href="/#">Settings</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar