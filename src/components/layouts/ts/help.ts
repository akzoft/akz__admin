export const open_sidebar = () => {
    const width = window.innerWidth;
    let sidebar: any = document.querySelector(".sidebar");
    console.log(width)

    if (width < 768) {
        if (sidebar.classList.contains('desktop-close')) {
            sidebar.classList.remove('desktop-close')
        }
        if (sidebar.classList.contains('medium-open')) {
            sidebar.classList.remove('medium-open')
        }
        sidebar.classList.toggle('mobile-open');
    } else {

        if (width > 768 && width < 960) {
            if (sidebar.classList.contains('mobile-open')) {
                sidebar.classList.remove('mobile-open')
            }
            if (sidebar.classList.contains('desktop-close')) {
                sidebar.classList.remove('desktop-close')
            }
            sidebar.classList.toggle('medium-open');
        } else
            if (width > 960) {
                if (sidebar.classList.contains('mobile-open')) {
                    sidebar.classList.remove('mobile-open')
                }
                if (sidebar.classList.contains('medium-open')) {
                    sidebar.classList.remove('medium-open')
                }
                sidebar.classList.toggle('desktop-close');
            }
    }
}

export const open_dropdown_sub_menu = (e: any) => {
    e.currentTarget.classList.toggle("showMenu");
}

export const close_overlay = () => {
    let rightbar: any = document.querySelectorAll(`.rbar`);
    rightbar?.forEach((rb: any) => {
        if (rb?.classList?.contains('message-rightbar') || rb?.classList?.contains('notification-rightbar')) {
            rb?.classList?.remove("open-rightbar");
        }
    })
}

export const open_rightbar = (name: string) => {
    let rightbar: any = document.querySelector(`.${name}`);
    rightbar.classList.add("open-rightbar");
}

export const active_main_fullscreen = () => {

    var page: any = document.getElementById("html")
    if (document.fullscreenElement)
        document.exitFullscreen()
    else
        page.requestFullscreen()
}

export const open_profile_box = () => {
    document.querySelector('.profile_panel')?.classList.toggle('active')
}



export const remove_all_poppup_panel = (e: any) => {
    const profile_panel: any = document.querySelector('.profile_panel')
    if (profile_panel.classList.contains('active')) profile_panel.classList.remove('active')

}

export const active_rightsidebar_tab = (e: any, index: number) => {
    const all: any = document.querySelectorAll('.tab-item')
    const content: any = document.querySelectorAll('.content-item')

    all?.forEach((el: any) => { if (parseInt(el.id) !== index) el.classList.remove('active'); });
    content?.forEach((el: any) => { if (parseInt(el.id) === index) el.classList.add('active'); else el.classList.remove('active'); });
    const id = parseInt(e.currentTarget.id)
    if (id === index) e.currentTarget.classList.add('active');
}




export const open_page_tools = () => {
    document.querySelector('.page_header_items')?.classList.toggle('active')
    document.querySelector('.header-action-btn')?.classList.toggle('transition');

    if (document.querySelector('.page_header_items')?.classList.contains('active')) {
        document.querySelector('.header-action-btn')?.classList.replace('ti-angle-left', 'ti-angle-right')
    }
    else {
        document.querySelector('.header-action-btn')?.classList.replace('ti-angle-right', 'ti-angle-left')
    }
}


export const open_page_fullscreen = () => {
    var page: any = document.getElementById("page_fullscreen")
    if (document.fullscreenElement)
        document.exitFullscreen()
    else
        page.requestFullscreen()
}


export const active_reload_page = (e: any) => {
    const rload = document.querySelector('.ti-reload')
    rload?.classList.add('active')
    setTimeout(() => { if (rload?.classList?.contains('active')) { rload?.classList?.remove('active') } }, 2000);
}


