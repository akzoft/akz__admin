import React from 'react'
import { active_reload_page, open_page_fullscreen, open_page_tools } from '../layouts/ts/help'

const CustomPage = ({ children }: any) => {
    return (
        <div className='page card' id='page_fullscreen'>
            <div className="page-header">
                <div className="page_header_items">
                    <i className="ti ti-angle-left header-action-btn" onClick={open_page_tools}></i>
                    <i className="ti ti-fullscreen" onClick={open_page_fullscreen}></i>
                    <i className="ti ti-reload" onClick={active_reload_page}></i>
                    <i className="ti ti-close"></i>
                </div>
            </div>
            <div className='page-body'>
                {children}
            </div>
        </div>
    )
}

export default CustomPage