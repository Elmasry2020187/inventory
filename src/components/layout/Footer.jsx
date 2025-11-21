import { cn } from "@/lib/utils";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Link, NavLink } from "react-router";

const socialLinks = [
  {
    icon: <Facebook strokeWidth={0.1} weight="fill" fill="white" />,
  },
  {
    icon: <Twitter  strokeWidth={0.1} weight="fill" fill="white"/>,
  },
  {
    icon: <Instagram />,
  },
];
const navigationLinks = [
  "Dashboard",
  "Sales",
  "Banking",
  "Records",
  "Contact Us",
];
export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="max-w-7xl mx-auto px-6 py-8 gap-3 grid grid-cols-4 items-center">
        <h2 className="text-2xl font-bold text-gray-800">
            <Link to="/" >WareView</Link>
        </h2>

        <div className="lg:flex lg:justify-end col-span-3">
          <nav className="flex gap-6 text-gray-600 text-base">
            {navigationLinks.map(
              (item) => (
                <Link key={item} to={`/?page=${item.toLowerCase()}`} className="hover:text-gray-900">
                  {item}
                </Link>
              )
            )}
          </nav>
        </div>

        <p className="col-span-2 text-gray-500 mt-3 leading-relaxed">
          Cultivating Efficiency, Tracking Excellence —
          <br />
          Your Trusted Inventory Management Partner
        </p>

        <div className="col-span-2">
          <div className="flex gap-5 justify-end">
            {socialLinks.map((s, i) => (
              <NavLink
                key={i}
                href="#"
                className={cn(
                  "bg-primary flex items-center  text-primary-foreground p-1.5 rounded-full hover:bg-primary/90",
                  s.className
                )}
                onClick={() => window.scrollTo(0, 0)}
              >
                {s.icon}
              </NavLink>
            ))}
          </div>
        </div>
      </div>

      <div className="py-4 px-6 border-t flex justify-center">
        <p className="text-gray-400">
          &copy; 2025 Mohamed Elmasry. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
