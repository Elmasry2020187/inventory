import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus, Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card-item"

const suppliers = [
  { name: "Apple", email: "apple@gmail.com", contact: "+63 123 4243", logo: "/apple.png" },
  { name: "Samsung", email: "samsung@gmail.com", contact: "+63 133 3453", logo: "/samsung.png" },
  { name: "Mugna Tech", email: "logitech@gmail.com", contact: "+63 433 4451", logo: "/mugna.png" },
  { name: "Logitech", email: "xiao.mi@gmail.com", contact: "+63 433 4531", logo: "/logitech.png" },
  { name: "Asus", email: "asus@gmail.com", contact: "+63 234 6457", logo: "/asus.png" },
  { name: "Lian Li", email: "microsoft@gmail.com", contact: "+63 546 8345", logo: "/lianli.png" },
  { name: "NZXT", email: "hello@mugna.tech", contact: "+63 917 1033 599", logo: "/nzxt.png" },
  { name: "Xiaomi", email: "lianli@gmail.com", contact: "+63 123 3345", logo: "/xiaomi.png" },
  { name: "Microsoft", email: "akko@gmail.com", contact: "+63 334 5673", logo: "/microsoft.png" },
  { name: "Sony", email: "intel@gmail.com", contact: "+63 986 7465", logo: "/sony.png" },
  { name: "Dell", email: "nvidia@gmail.com", contact: "+63 461 4677", logo: "/dell.png" },
];

export default function SuppliersPage() {
  return (
    <div className="p-6 space-y-8 bg-[#f5f6fc] min-h-screen">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Suppliers</h2>
        <div className="flex space-x-2 items-center">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 w-4 h-4 text-gray-400" />
            <Input placeholder="Search" className="pl-8" />
          </div>
          <Button className="bg-sky-500 hover:bg-sky-600 text-white">
            <Plus className="w-4 h-4 mr-1" /> Edit Suppliers
          </Button>
        </div>
      </div>

      <Card className="rounded-2xl shadow-sm">
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-[#f1f2f7]">
              <TableRow>
                <TableHead>Supplier Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Contact No.</TableHead>
                <TableHead className="text-right">&nbsp;</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {suppliers.map((s, i) => (
                <TableRow key={i}>
                  <TableCell className="flex items-center space-x-2">
                    <img src={s.logo} alt={s.name} className="h-6 w-6 rounded-full" />
                    <span>{s.name}</span>
                  </TableCell>
                  <TableCell>{s.email}</TableCell>
                  <TableCell>{s.contact}</TableCell>
                  <TableCell className="text-sky-500 text-right cursor-pointer">Order History</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
