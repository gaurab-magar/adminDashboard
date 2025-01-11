import React from 'react';
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS } from '../../lib/consts/navigation';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { HiOutlineLogout } from 'react-icons/hi';
import { IoTrendingUpSharp } from 'react-icons/io5';
import { MdOutlineCancel } from 'react-icons/md';

const linkClassesActive = 'flex items-center gap-2 px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm font-bold text-white hover:text-white duration-400 transition-all ease-in-out';
const linkClasses = 'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base text-gray-400 hover:text-gray-300';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-screen w-64 bg-neutral-900 text-white p-4 z-50 transition-transform transform 
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:block`}
    >
      <div className="flex items-center justify-between">
        <div className="flex flex-row items-center gap-4 p-4 font-bold text-green-600">
          <IoTrendingUpSharp size={24} />
          <div className="">GT-Portal</div>
        </div>
        <button onClick={toggleSidebar} className="block lg:hidden text-white">
          <MdOutlineCancel size={24} />
        </button>
      </div>
      <div className="flex-1 flex flex-col gap-0.5 py-8">
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} toggleSidebar={toggleSidebar} />
        ))}
      </div>
      <div className="border-t border-neutral-500 py-3">
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} toggleSidebar={toggleSidebar} />
        ))}
        <div className="flex items-center text-lg px-3 py-2 gap-2 text-red-500 transition-all ease-in-out cursor-pointer hover:bg-neutral-700">
          <span>
            <HiOutlineLogout />
          </span>
          Logout
        </div>
      </div>
    </div>
  );
};

function SidebarLink({ item, toggleSidebar }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // Handle link clicks
  function handleLinkClick(e) {
    e.preventDefault(); // Prevent default behavior
    if (window.innerWidth < 1024) {
      toggleSidebar(); // Close sidebar on small screens
    }
    navigate(item.path); // Programmatic navigation
  }

  return (
    <Link
      to={item.path}
      className={pathname === item.path ? linkClassesActive : linkClasses}
      onClick={handleLinkClick} // Attach the click handler
    >
      <span>{item.icon}</span>
      {item.label}
    </Link>
  );
}

export default Sidebar;
