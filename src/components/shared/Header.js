import React, { Fragment } from 'react';
import { Popover, PopoverButton, PopoverPanel, Transition } from '@headlessui/react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { HiOutlineBell, HiOutlineChatAlt, HiOutlineMenu, HiOutlineSearch, HiOutlineUser } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Header = ({ toggleSidebar }) => {
  return (
    <div className="bg-white h-16 px-4 py-4 flex justify-between items-center border-b border-gray-300 shadow">
      {/* Hamburger Menu */}
      <div className="lg:hidden">
        <button className="text-black" onClick={toggleSidebar}>
          <HiOutlineMenu size={24} />
        </button>
      </div>

      {/* Search Bar */}
      <div className="relative lg:w-1/2 mx-2 hidden md:flex">
        <HiOutlineSearch className="absolute top-1/2 -translate-y-1/2 right-4 text-xl text-gray-600 cursor-pointer" />
        <input type="text"
          placeholder="Search..."
          className="w-full h-10 text-sm focus:outline-none border border-gray-300 rounded-md px-4"/>
      </div>

      {/* Icons Section */}
      <div className="flex items-center justify-end gap-4 sm:gap-2 sm:visible">
        {/* Chat Icon */}
        <Popover className="relative">
          <PopoverButton className="p-2 rounded-full hover:bg-gray-200 active:bg-gray-300 focus:outline-none cursor-pointer">
            <HiOutlineChatAlt fontSize={24} className="text-gray-700" />
          </PopoverButton>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="transform opacity-0 translate-y-1"
            enterTo="transform opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="transform opacity-100 translate-y-0"
            leaveTo="transform opacity-0 translate-y-1"
          >
            <PopoverPanel className="absolute z-10 w-80 bg-white rounded-md shadow-lg p-4 right-0 translate-y-3">
              This is the messages
            </PopoverPanel>
          </Transition>
        </Popover>

        {/* Notification Icon */}
        <Popover className="relative">
          <PopoverButton className="p-2 rounded-full hover:bg-gray-200 active:bg-gray-300 focus:outline-none cursor-pointer">
            <HiOutlineBell fontSize={24} className="text-gray-700" />
          </PopoverButton>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="transform opacity-0 translate-y-1"
            enterTo="transform opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="transform opacity-100 translate-y-0"
            leaveTo="transform opacity-0 translate-y-1"
          >
            <PopoverPanel className="absolute z-10 w-80 bg-white rounded-md shadow-lg p-4 right-0 translate-y-3">
              This is the notifications
            </PopoverPanel>
          </Transition>
        </Popover>

        {/* Profile Menu */}
        <Menu as="div" className="relative">
          <MenuButton className="p-2 rounded-full hover:bg-gray-200 active:bg-gray-300 focus:outline-none cursor-pointer">
            <HiOutlineUser fontSize={24} className="text-gray-700" />
          </MenuButton>
          <MenuItems className="absolute right-0 z-10 w-48 bg-white rounded-md shadow-lg p-2 mt-2">
            <MenuItem>
              {({ active }) => (
                <Link
                  to="/settings"
                  className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100' : ''}`}
                >
                  Your Profile
                </Link>
              )}
            </MenuItem>
            <MenuItem>
              {({ active }) => (
                <Link
                  to="/support"
                  className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100' : ''}`}
                >
                  Settings
                </Link>
              )}
            </MenuItem>
            <MenuItem>
              {({ active }) => (
                <Link
                  to="/login"
                  className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100' : ''}`}
                >
                  Sign Out
                </Link>
              )}
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>
    </div>
  );
};

export default Header;
