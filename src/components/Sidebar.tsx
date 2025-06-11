import React, { useState, useEffect } from "react";
import {
  Home,
  Users,
  Lightbulb,
  FileText,
  BarChart,
  Route,
  Wrench,
  Video,
  PenTool,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { cn } from "../lib/utils";
import { ScrollArea } from "./ui/scroll-area";
import { useSidebar } from "../contexts/SidebarContext";

const Sidebar = () => {
  const { isOpen } = useSidebar();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [showSubmenu, setShowSubmenu] = useState<boolean>(false);
  const [submenuPosition, setSubmenuPosition] = useState({ top: 0, left: 0 });
  const location = useLocation();

  // Close submenu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (
        !target.closest(".sidebar-submenu") &&
        !target.closest(".sidebar-icon")
      ) {
        setShowSubmenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Check if the current path is within a dropdown section
  useEffect(() => {
    const currentPath = location.pathname;
    if (currentPath.startsWith("/support")) {
      setActiveDropdown("/support");
    } else if (currentPath.startsWith("/more")) {
      setActiveDropdown("/more");
    } else if (currentPath.startsWith("/tools")) {
      setActiveDropdown("/tools");
    }
  }, [location]);

  const toggleDropdown = (path: string, e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation
    e.stopPropagation(); // Prevent event bubbling
    setActiveDropdown(activeDropdown === path ? null : path);
  };

  const isDropdownActive = (path: string) => activeDropdown === path;

  const toggleSubmenu = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    e.stopPropagation();

    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();

    setSubmenuPosition({
      top: rect.top,
      left: rect.right + 10, // Position to the right of the icon
    });

    if (showSubmenu && activeDropdown === path) {
      setShowSubmenu(false);
      setActiveDropdown(null);
    } else {
      setShowSubmenu(true);
      setActiveDropdown(path);
    }
  };

  const navItems = [
    { icon: <Home className="w-5 h-5 mr-2" />, label: "Home", path: "/home" },
    {
      icon: <Users className="w-5 h-5 mr-2" />,
      label: "Child Management",
      path: "/childManagement",
    },
    // {
    //   icon: <GraduationCap className="w-5 h-5 mr-2" />,
    //   label: "Class Assignment",
    //   path: "/class-assignment",
    // },
    // {
    //   icon: <Rocket className="w-5 h-5 mr-2" />,
    //   label: "Program Rollout",
    //   path: "/program-rollout",
    // },
    {
      icon: <Lightbulb className="w-5 h-5 mr-2" />,
      label: "Learning Goals",
      path: "/learning-goals",
    },
    {
      icon: <BarChart className="w-5 h-5 mr-2" />,
      label: "Analytics",
      path: "/analytics",
    },
    {
      icon: <FileText className="w-5 h-5 mr-2" />,
      label: "Reports",
      path: "/reports",
    },
    {
      icon: <Route className="w-5 h-5 mr-2" />,
      label: "Mentor Sessions",
      path: "/mentor-sessions",
    },
    {
      icon: <Wrench className="w-5 h-5 mr-2" />,
      label: "Tools",
      path: "/tools",
      hasDropdown: true,
      subItems: [
        {
          label: "Collaborative Page",
          path: "/tools/collaborative",
          icon: <PenTool className="w-4 h-4 mr-2" />,
        },
        {
          label: "Live Events",
          path: "/tools/live-events",
          icon: <Video className="w-4 h-4 mr-2" />,
        },
      ],
    },

    // {
    //   icon: <BarChart3 className="w-5 h-5 mr-2" />,
    //   label: "Business Tools",
    //   path: "/business-tools",
    // },
    // {
    //   icon: <HelpCircle className="w-5 h-5 mr-2" />,
    //   label: "Support",
    //   path: "/support",
    //   hasDropdown: true,
    // },
    // {
    //   icon: <MoreHorizontal className="w-5 h-5 mr-2" />,
    //   label: "More",
    //   path: "/more",
    //   hasDropdown: true,
    // },
  ];

  const renderSubMenu = (path: string, item: any) => {
    if (path === "/tools" && isDropdownActive("/tools") && item.subItems) {
      return (
        <div className="pl-10 space-y-4 py-3">
          {item.subItems.map((subItem: any, idx: number) => (
            <NavLink
              key={idx}
              to={subItem.path}
              className={({ isActive }) =>
                cn(
                  "flex items-center py-1 text-base font-medium",
                  isActive
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                )
              }
            >
              {subItem.icon}
              <span>{subItem.label}</span>
            </NavLink>
          ))}
        </div>
      );
    }
    return null;
  };

  // Define the renderSubmenuPopup function
  const renderSubmenuPopup = () => {
    if (showSubmenu && activeDropdown === "/tools") {
      const toolsItem = navItems.find((item) => item.path === "/tools");
      if (toolsItem && toolsItem.subItems) {
        return (
          <div
            className="sidebar-submenu fixed bg-white rounded-md shadow-lg border border-gray-200 p-3 z-50"
            style={{
              top: `${submenuPosition.top}px`,
              left: `${submenuPosition.left}px`,
            }}
          >
            <div className="font-medium text-gray-800 mb-2">Tools</div>
            <div className="space-y-2">
              {toolsItem.subItems.map((item: any, idx: number) => (
                <NavLink
                  key={idx}
                  to={item.path}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center py-1 text-sm font-medium",
                      isActive
                        ? "text-blue-600"
                        : "text-gray-700 hover:text-blue-600"
                    )
                  }
                >
                  {item.icon}
                  <span>{item.label}</span>
                </NavLink>
              ))}
            </div>
          </div>
        );
      }
    }
    return null;
  };

  // Desktop sidebar - full width
  const desktopSidebarClasses = cn(
    "w-[259px] bg-white border-r border-gray-200 h-[calc(100vh-4rem)] fixed top-16 left-0 z-40 hidden md:block transition-transform duration-300 font-nunito",
    !isOpen && "transform -translate-x-full"
  );

  // Mobile sidebar with only icons
  const mobileSidebarClasses = cn(
    "w-[60px] bg-gray-100 border-r border-gray-200 h-screen fixed top-0 left-0 z-40 flex flex-col items-center py-6 md:hidden transition-transform duration-300",
    !isOpen && "transform -translate-x-full font-nunito"
  );

  return (
    <>
      {/* Desktop sidebar - full width */}
      <div className={desktopSidebarClasses}>
        <ScrollArea className="flex-1 h-[calc(100vh-16rem)]">
          <div className="p-4 space-y-1">
            {navItems.map((item, index) => (
              <div
                key={index}
                className={cn(
                  "relative w-full",
                  isDropdownActive(item.path) && "mb-0"
                )}
              >
                {item.hasDropdown ? (
                  <div
                    className={cn(
                      "flex items-center px-3 py-3 text-base font-medium cursor-pointer w-full",
                      isDropdownActive(item.path)
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-700 hover:bg-gray-100"
                    )}
                    onClick={(e) => toggleDropdown(item.path, e)}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                    <div className="ml-auto">
                      {isDropdownActive(item.path) ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </div>
                  </div>
                ) : (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      cn(
                        "flex items-center px-3 py-3 text-base font-medium w-full",
                        isActive
                          ? "bg-blue-50 text-[#3C91BA] font-bold"
                          : "text-gray-700 hover:bg-gray-100"
                      )
                    }
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </NavLink>
                )}
                {isDropdownActive(item.path) && (
                  <div
                    className="absolute left-0 w-1 top-0 h-full bg-blue-500"
                    aria-hidden="true"
                  ></div>
                )}
                {renderSubMenu(item.path, item)}
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Educational Tools Section */}
        {/* <div className="border-t border-gray-200 absolute bottom-0 left-0 right-0 bg-white">
          <div className="p-4">
            <div className="font-medium text-gray-700 mb-4">Learning Resources</div>
            <div className="flex mb-4">
              <ToggleGroup 
                type="single" 
                value={activeToggle}
                onValueChange={handleToggleValueChange}
                className="flex rounded-full border border-gray-300 p-0.5 w-full"
              >
                <ToggleGroupItem 
                  value="add-ons" 
                  className={cn(
                    "flex-1 h-7 rounded-full text-xs flex items-center justify-center gap-1",
                    activeToggle === "add-ons" 
                      ? "bg-blue-600 text-white" 
                      : "bg-transparent text-gray-700"
                  )}
                >
                  <Plus className="w-3 h-3" /> Learning Tools
                </ToggleGroupItem>
                <ToggleGroupItem 
                  value="resources" 
                  className={cn(
                    "flex-1 h-7 rounded-full text-xs",
                    activeToggle === "resources" 
                      ? "bg-blue-600 text-white" 
                      : "bg-transparent text-gray-700"
                  )}
                >
                  Resources
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
            
            <div className="space-y-4">
              {activeToggle === "add-ons" ? (
                <>
                  <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-medium">Interactive Quizzes</div>
                      <div className="text-xs text-gray-500">Test your knowledge</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg">
                    <div className="bg-green-100 p-2 rounded-full">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-medium">Video Lessons</div>
                      <div className="text-xs text-gray-500">Learn at your own pace</div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg">
                    <div className="bg-purple-100 p-2 rounded-full">
                      <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-medium">E-books</div>
                      <div className="text-xs text-gray-500">Comprehensive guides</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg">
                    <div className="bg-yellow-100 p-2 rounded-full">
                      <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-medium">Research Papers</div>
                      <div className="text-xs text-gray-500">Latest academic findings</div>
                    </div>
                  </div>
                </>
              )}
              
              <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg">
                <div className="bg-pink-100 p-2 rounded-full">
                  <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-medium">Live Webinars</div>
                  <div className="text-xs text-gray-500">Join expert sessions</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg">
                <div className="bg-indigo-100 p-2 rounded-full">
                  <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-medium">Skill Assessments</div>
                  <div className="text-xs text-gray-500">Track your progress</div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      {/* Mobile sidebar with only icons */}
      <div className={mobileSidebarClasses}>
        {navItems.map((item, index) => (
          <div key={index} className="mb-6">
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                cn(
                  "flex items-center text-base font-medium w-full rounded-full",
                  isActive
                    ? "bg-[#3C91BA] text-white"
                    : "text-black hover:bg-[#3C91BA]"
                )
              }
            >
              <button
                className={cn(
                  "sidebar-icon flex items-center justify-center w-10 h-10 rounded-full shadow-sm",
                  isDropdownActive(item.path) && "text-blue-600"
                )}
                onClick={(e) =>
                  item.hasDropdown ? toggleSubmenu(e, item.path) : null
                }
              >
                {React.cloneElement(item.icon, { className: "w-5 h-5" })}
              </button>
            </NavLink>
          </div>
        ))}
      </div>

      {/* Popup menu */}
      {renderSubmenuPopup()}
    </>
  );
};

export default Sidebar;
