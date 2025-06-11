import { useState, useEffect, Fragment } from "react";
import { Bell, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { useSidebar } from "../contexts/SidebarContext";
import {
  Menu,
  MenuItems,
  MenuButton,
  MenuItem,
  Transition,
} from "@headlessui/react";
import { IoMenu } from "react-icons/io5";
import Logo from "../assets/logo.svg";

const Header = () => {
  const { toggleSidebar } = useSidebar();
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const notifications = [
    {
      id: 1,
      title: "New Course Available: Advanced React Patterns",
      date: "May 20, 10:30 AM",
      daysAgo: "2 hours ago",
      isNew: true,
    },
    {
      id: 2,
      title: "Assignment Due: Complete Project Wireframe",
      date: "May 19, 3:45 PM",
      daysAgo: "1 day ago",
      isNew: true,
    },
    {
      id: 3,
      title: "New Message from Instructor",
      date: "May 18, 11:20 AM",
      daysAgo: "2 days ago",
      isNew: false,
    },
    {
      id: 4,
      title: "Course Completed: Introduction to TypeScript",
      date: "May 17, 2:15 PM",
      daysAgo: "3 days ago",
      isNew: false,
    },
    {
      id: 5,
      title: "New Learning Path Added: Full-Stack Development",
      date: "May 15, 9:30 AM",
      daysAgo: "5 days ago",
      isNew: false,
    },
  ];

  return (
    <header className="h-16 flex items-center justify-between px-4 fixed top-0 left-0 right-0 bg-white z-50 font-nunito">
      <div className="flex items-center">
        <button
          className="mr-2 cursor-pointer"
          onClick={toggleSidebar}
          aria-label="Toggle sidebar"
        >
          <IoMenu size={30} />
        </button>

        <Link to="/home" className="flex items-center">
          <img src={Logo} className="w-14 h-14" />
          <span className="font-bold text-xl uppercase">SkillSeed</span>
        </Link>
      </div>

      {/* <div className="flex-1 max-w-xl mx-4 hidden">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full bg-gray-100 text-sm"
          />
        </div>
      </div> */}

      <div className="flex items-center md:space-x-3">
        {/* Notification Menu */}
        <Menu as="div" className="relative ml-3">
          <div>
            <MenuButton className="flex rounded-full text-sm focus:outline-none">
              <span className="sr-only">Open user menu</span>
              <div className="relative">
                <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 flex items-center justify-center text-white text-xs">
                  92
                </div>
                <Bell className="h-6 w-6 text-gray-700" />
              </div>
            </MenuButton>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <MenuItems className="absolute right-0 z-50 mt-2 w-[300px] origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none font-primaryRegular">
              <MenuItem>
                <div className="p-4 pb-2 flex justify-between items-center border-b">
                  <h3 className="text-xl font-bold">Notifications</h3>
                </div>
              </MenuItem>
              <hr />
              <MenuItem>
                <div className="flex p-2 gap-2 border-b">
                  <div className="bg-gray-100 text-black px-4 py-1 rounded-full text-sm font-medium">
                    All
                  </div>
                  <div className="text-gray-500 px-4 py-1 rounded-full text-sm">
                    Unread
                  </div>
                </div>
              </MenuItem>
              <MenuItem>
                <div className="bg-blue-50 flex items-center p-4 gap-4">
                  <div className="bg-white p-2 rounded-full">
                    <Bell className="h-5 w-5 text-blue-500" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">Enable push notifications</p>
                  </div>
                  <Button className="rounded-full hover:bg-gray-800">
                    Manage
                  </Button>
                </div>
              </MenuItem>
              <MenuItem>
                <div className="max-h-[400px] overflow-y-auto">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className="flex p-4 border-l-4 border-transparent hover:bg-gray-50 border-b"
                    >
                      <div className="mr-3">
                        <div className="bg-blue-100 rounded-full p-2">
                          <svg
                            viewBox="0 0 36 36"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6"
                          >
                            <circle cx="18" cy="18" r="18" fill="#0074D9" />
                            <path
                              d="M12 12C12 10.3431 13.3431 9 15 9H21C22.6569 9 24 10.3431 24 12V24C24 25.6569 22.6569 27 21 27H15C13.3431 27 12 25.6569 12 24V12Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{notification.title}</p>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <span>{notification.date}</span>
                          <span>—</span>
                          <span className="text-blue-500">
                            {notification.daysAgo}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </MenuItem>
            </MenuItems>
          </Transition>
        </Menu>

        {/* Profile Menu */}
        <Menu as="div" className="relative ml-3">
          <div>
            <MenuButton className="flex rounded-full text-sm focus:outline-none">
              <span className="sr-only">Open user menu</span>
              <div className="flex items-center">
                <div className="bg-[#3C91BA] w-9 h-9 text-sm text-white text-center p-2 rounded-full mx-4 my-2 flex items-center justify-center">
                  SS
                </div>
                <div className="hidden md:flex flex-col items-start">
                  <p className="font-semibold">Bright Future Academy</p>
                  <p className="text-[#999797] text-xs">brightfa@gmail.com</p>
                </div>
              </div>
            </MenuButton>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <MenuItems className="absolute right-0 z-50 mt-2 w-[300px] origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none font-primaryRegular">
              <MenuItem>
                <div className="p-4 flex items-center gap-4 border-b">
                  <Avatar className="h-14 w-14 bg-[#3C91BA]">
                    <AvatarFallback className="text-xl font-medium text-white bg-[#3C91BA]">
                      SS
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-bold">Skillseed School</h3>
                    <p className="text-[#3C91BA]">school@skillseed.com</p>
                  </div>
                </div>
              </MenuItem>
              <hr />
              <MenuItem>
                <Link
                  to="/dashboard/profile"
                  className="block px-4 py-2 text-sm text-gray-700"
                >
                  <div className="flex items-center gap-2 text-base">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-user"
                    >
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                    Profile
                  </div>
                </Link>
              </MenuItem>
              <MenuItem>
                <div className="flex items-center gap-2 text-base px-4 py-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-bar-chart-2"
                  >
                    <line x1="18" y1="20" x2="18" y2="10"></line>
                    <line x1="12" y1="20" x2="12" y2="4"></line>
                    <line x1="6" y1="20" x2="6" y2="14"></line>
                  </svg>
                  Learning Progress
                </div>
              </MenuItem>
              <MenuItem>
                <div className="flex items-center gap-2 text-base px-4 py-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-settings"
                  >
                    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                  Account Settings
                </div>
              </MenuItem>
              <MenuItem>
                <div className="flex items-center gap-2 text-base px-4 py-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-help-circle"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                  </svg>
                  Help Center
                </div>
              </MenuItem>
              <MenuItem>
                <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between">
                    <span className="text-base">Dark Mode</span>
                    <button
                      type="button"
                      className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 dark:bg-gray-700"
                      onClick={() =>
                        setTheme(theme === "dark" ? "light" : "dark")
                      }
                    >
                      <span className="sr-only">Toggle dark mode</span>
                      <span
                        className={`${
                          theme === "dark" ? "translate-x-6" : "translate-x-1"
                        } inline-flex h-4 w-4 items-center justify-center rounded-full bg-white transition`}
                      >
                        {theme === "dark" ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-gray-700"
                          >
                            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-yellow-500"
                          >
                            <circle cx="12" cy="12" r="4" />
                            <path d="M12 2v2" />
                            <path d="M12 20v2" />
                            <path d="m4.93 4.93 1.41 1.41" />
                            <path d="m17.66 17.66 1.41 1.41" />
                            <path d="M2 12h2" />
                            <path d="M20 12h2" />
                            <path d="m6.34 17.66-1.41 1.41" />
                            <path d="m19.07 4.93-1.41 1.41" />
                          </svg>
                        )}
                      </span>
                    </button>
                  </div>
                </div>
              </MenuItem>
              <MenuItem>
                <div className="flex items-center gap-3 text-base w-full justify-center py-3">
                  <LogOut size={20} />
                  <span>Logout</span>
                </div>
              </MenuItem>
            </MenuItems>
          </Transition>
        </Menu>
      </div>
    </header>
  );
};

export default Header;
