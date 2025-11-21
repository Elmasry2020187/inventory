import { NavLink } from "react-router";
import { Home, Boxes, Users, ShoppingCart, BarChart, HelpCircle, Settings } from "lucide-react";

export default function Sidebar() {
  const links = [
    { to: "/", label: "Dashboard", icon: <Home size={18} /> },
    { to: "/inventory", label: "Inventory", icon: <Boxes size={18} /> },
    { to: "/sales-orders", label: "Sales Orders", icon: <ShoppingCart size={18} /> },
    { to: "/suppliers", label: "Suppliers", icon: <Users size={18} /> },
    { to: "/reports", label: "Reports", icon: <BarChart size={18} /> },
  ];

  const supportLinks = [
    { to: "/help", label: "Help", icon: <HelpCircle size={18} /> },
    { to: "/settings", label: "Settings", icon: <Settings size={18} /> },
  ];

  return (
    <aside className="pt-5  bg-white border-r flex flex-col h-screen">

      <nav className="flex-1 px-4 space-y-2">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium 
              ${isActive ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-gray-100"}`
            }onClick={() => window.scrollTo(0, 0)}
          >
            {link.icon}
            {link.label}
          </NavLink>
        ))}

        <div className="pt-6 text-xs text-gray-400 uppercase tracking-wider">
          Support
        </div>

        {supportLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium 
              ${isActive ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-gray-100"}`
            }
          >
            {link.icon}
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
