import { Input } from "@/components/ui/Input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/vatar"
import { Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className="h-16 top-0 w-full border-b bg-white px-6 flex items-center justify-end z-10">
      <img src="/wareview.png" alt="Logo" className="mr-auto" />
      <div className="flex items-center gap-3 mr-10 relative">
        <Search size={18} className="text-gray-400 absolute left-3" />
        <Input placeholder="Search..." className="w-[256px] pl-10" />
      </div>


        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src="https://i.pravatar.cc/300" />
            <AvatarFallback>BD</AvatarFallback>
          </Avatar>

          <div>
            <div className="font-medium text-sm">Bryan Doe</div>
            <div className="text-xs text-gray-400">Admin</div>
          </div>
        </div>
     
    </header>
  );
}
