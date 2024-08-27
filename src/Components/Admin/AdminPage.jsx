import { useState } from 'react'
import './AdminPack.css'
import { Header } from './Header'
import { Home } from './Home'
import { SideBar } from './SideBar'
export const AdminPage = () => {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle)
    }
    return(
        <div>
            <div className='grid-container'>
                <Header OpenSidebar={OpenSidebar}/>
                <SideBar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
                <Home />
            </div>
        </div>
    );
}