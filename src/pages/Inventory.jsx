import React from "react";
import { Card, CardContent } from "@/components/ui/card-item";
import { Plus, Search } from "lucide-react";
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

const products = [
  {
    name: "Macbook Pro",
    code: "#0001",
    type: "Laptop",
    price: "$1,241",
    qty: 44,
    img: "/macbook.png",
  },
  {
    name: "iPhone 14 pro",
    code: "#0002",
    type: "Phone",
    price: "$1,499",
    qty: 23,
    img: "/iphone.png",
  },
  {
    name: "Zoom75",
    code: "#0003",
    type: "Keyboard",
    price: "$215",
    qty: 23,
    img: "/zoom75.png",
  },
  {
    name: "Airpods Pro",
    code: "#0004",
    type: "Earphones",
    price: "$249",
    qty: 23,
    img: "/airpods.png",
  },
  {
    name: "Samsung Galaxy Fold",
    code: "#0005",
    type: "Phone",
    price: "$1,199",
    qty: 23,
    img: "/fold.png",
  },
  {
    name: "Samsung Odyssey",
    code: "#0006",
    type: "Displays",
    price: "$500",
    qty: 23,
    img: "/odyssey.png",
  },
  {
    name: "Logitech Superlight",
    code: "#0006",
    type: "Displays",
    price: "$500",
    qty: 23,
    img: "/logitech.png",
  },
];

export default function InventoryList() {
  return (
    <div className="p-6 bg-[#f5f6fc] min-h-screen space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Inventory</h2>
        <div className="flex items-center space-x-2">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 w-4 h-4 text-gray-400" />
            <Input placeholder="Search" className="pl-8" />
          </div>
          <Button className="bg-sky-500 hover:bg-sky-600 text-white">
            <Plus className="w-4 h-4 mr-1" /> Add New Product
          </Button>
        </div>
      </div>
      <Card className="rounded-2xl shadow-sm">
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-[#f1f2f7]">
              <TableRow>
                <TableHead>
                  <input type="checkbox" />
                </TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Code</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Image</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product, i) => (
                <TableRow key={i} className="bg-[#f5f6fc]">
                  <TableCell>
                    <input type="checkbox" />
                  </TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.code}</TableCell>
                  <TableCell>{product.type}</TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell>{product.qty}</TableCell>
                  <TableCell>
                    <img src={product.img} alt="product" className="h-10 rounded-md" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
