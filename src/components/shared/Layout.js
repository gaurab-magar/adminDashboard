import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';


const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function toggleSidebar (){
    setIsSidebarOpen(!isSidebarOpen)
  }
  return (
    <>
      <div className="flex flex-row bg-white h-screen w-full overflow-x-hidden">
        <Sidebar className='hidden md:flex' toggleSidebar={toggleSidebar} isOpen={isSidebarOpen} />
          <div className="flex-1 flex flex-col">
            <Header toggleSidebar={toggleSidebar} />
            <div className="flex-1 p-4">
              <Outlet />
            </div>
            <Footer />
          </div>
      </div>
    </>
  );
};

export default Layout;
