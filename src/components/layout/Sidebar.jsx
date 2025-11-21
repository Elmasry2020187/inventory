import {
  BarChart,
  Boxes,
  HelpCircle,
  Home,
  Settings,
  ShoppingCart,
  Users,
} from "lucide-react";
import { NavLink } from "react-router";

// =====================
// LINKS DATA
// =====================

const generalLinks = [
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


// =====================
// REUSABLE LINK COMPONENT
// =====================

function SidebarLink({ to, label, icon }) {
  return (
    <NavLink
      key={to}
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-2 px-3 py-2  
        ${
          isActive
            ? "bg-primary text-primary-foreground font-bold rounded-lg"
            : "text-gray-900 hover:bg-hover"
        }`
      }
      onClick={() => window.scrollTo(0, 0)}
    >
      {icon}
      {label}
    </NavLink>
  );
}


// =====================
// SECTION COMPONENT
// =====================

function NavSection({ title, links }) {
  return (
    <nav className="flex-1 px-4 space-y-4">
      <h4 className="text-xs text-gray-600 font-bold uppercase tracking-wider font-opensans py-2">
        {title}
      </h4>

      {links.map((link) => (
        <SidebarLink
          key={link.to}
          to={link.to}
          label={link.label}
          icon={link.icon}
        />
      ))}
    </nav>
  );
}


// =====================
// MAIN SIDEBAR
// =====================

export default function Sidebar() {
  return (
    <aside className="pt-8 px-4 bg-sidebar border-r flex flex-col h-screen">

      <NavSection title="GENERAL" links={generalLinks} />

      <NavSection title="SUPPORT" links={supportLinks} />

    </aside>
  );
}
