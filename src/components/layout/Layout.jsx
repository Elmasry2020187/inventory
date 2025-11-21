import { Outlet } from "react-router";
import Footer from "./Footer";
import Navbar from "./Navbar";
import RightSidebar from "./RightSidebar";
import Sidebar from "./Sidebar";

export default function Layout() {
  return (
    <div className="grid grid-cols-12 relative">
    <div className="col-span-12"> <Navbar /></div>
     <div className="col-span-2">
       <Sidebar />
     </div>
   
  
        <main className="col-span-8 col-start-3 min-h-screen">
        <Outlet />
        </main>
     
      <div className="col-span-2">
       <RightSidebar />
     </div>
  

      <div className="col-span-12 ">
           <Footer/>
      </div>
    </div>
  );
}
