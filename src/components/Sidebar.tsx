import {
  Home,
  Users,
  Lightbulb,
  FileText,
  BarChart,
  Route,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "../lib/utils";
import { ScrollArea } from "./ui/scroll-area";
import { useSidebar } from "../contexts/SidebarContext";
import { GrResources } from "react-icons/gr";

const Sidebar = () => {
  const { isOpen } = useSidebar();

  const navItems = [
    { icon: <Home className="w-5 h-5 mr-2" />, label: "Home", path: "/home" },
    {
      icon: <Users className="w-5 h-5 mr-2" />,
      label: "Child Management",
      path: "/childManagement",
    },
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
      icon: <GrResources className="w-5 h-5 mr-2" />,
      label: "Resources",
      path: "/resources",
    },
  ];

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
                // className={cn(
                //   "relative w-full",
                //   isDropdownActive(item.path) && "mb-0"
                // )}
              >
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
              </div>
            ))}
          </div>
        </ScrollArea>
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
            ></NavLink>
          </div>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
