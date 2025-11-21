// import React, { useState } from "react";
// import {
//   Table,
//   TableHeader,
//   TableRow,
//   TableHead,
//   TableBody,
//   TableCell,
// } from "@/components/ui/Table";

// import { Input } from "@/components/ui/Input";
// import { Button } from "@/components/ui/Button";
// import { Plus, Search } from "lucide-react";
// import { Card, CardContent } from "@/components/ui/Card"
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";

// const orders = Array(6).fill({
//   name: "Macbook Pro",
//   code: "#0001",
//   category: "Laptop",
//   qty: 1,
//   price: "$1,241",
// });

// const chartData = [
//   { month: "Jan", direct: 10000, retail: 5000, wholesale: 8000 },
//   { month: "Feb", direct: 15000, retail: 4000, wholesale: 9500 },
//   { month: "Mar", direct: 11000, retail: 7000, wholesale: 10000 },
//   { month: "Apr", direct: 13000, retail: 9000, wholesale: 9000 },
//   { month: "May", direct: 9000, retail: 8500, wholesale: 5000 },
//   { month: "Jun", direct: 12000, retail: 7000, wholesale: 9500 },
//   { month: "Jul", direct: 10000, retail: 8000, wholesale: 12000 },
//   { month: "Aug", direct: 14000, retail: 4500, wholesale: 6000 },
//   { month: "Sep", direct: 11000, retail: 13000, wholesale: 3000 },
//   { month: "Oct", direct: 18000, retail: 4000, wholesale: 8000 },
//   { month: "Nov", direct: 20000, retail: 6000, wholesale: 15000 },
//   { month: "Dec", direct: 24000, retail: 9000, wholesale: 17000 },
// ];

// export default function SalesOrdersPage() {
//   const [currentPage, setCurrentPage] = useState(1);
//   const totalPages = 5;

//   const handlePageChange = (page) => {
//     if (page >= 1 && page <= totalPages) setCurrentPage(page);
//   };

//   return (
//     <div className="p-6 space-y-8 bg-[#f5f6fc] min-h-screen">
//       {/* Header */}
//       <div className="flex justify-between items-center">
//         <h2 className="text-xl font-semibold">Sales Orders</h2>
//         <div className="flex space-x-2 items-center">
//           <div className="relative">
//             <Search className="absolute left-2 top-2.5 w-4 h-4 text-gray-400" />
//             <Input placeholder="Search" className="pl-8" />
//           </div>
//           <Button className="bg-sky-500 hover:bg-sky-600 text-white">
//             <Plus className="w-4 h-4 mr-1" /> Place Order
//           </Button>
//         </div>
//       </div>

//       {/* Table */}
//       <Card className="rounded-2xl shadow-sm">
//         <CardContent className="p-0">
//           <Table>
//             <TableHeader className="bg-[#f1f2f7]">
//               <TableRow>
//                 <TableHead>
//                   <input type="checkbox" />
//                 </TableHead>
//                 <TableHead>Product Name</TableHead>
//                 <TableHead>Order Code</TableHead>
//                 <TableHead>Category</TableHead>
//                 <TableHead>Quantity</TableHead>
//                 <TableHead>Total Price</TableHead>
//                 <TableHead className="text-right">Last 7 Days ▾</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {orders.map((order, i) => (
//                 <TableRow key={i}>
//                   <TableCell>
//                     <input type="checkbox" />
//                   </TableCell>
//                   <TableCell>{order.name}</TableCell>
//                   <TableCell>{order.code}</TableCell>
//                   <TableCell>{order.category}</TableCell>
//                   <TableCell>{order.qty}</TableCell>
//                   <TableCell>{order.price}</TableCell>
//                   <TableCell className="text-sky-500 cursor-pointer text-right">
//                     View Invoice
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </CardContent>
//       </Card>

//       {/* Pagination */}
//       <div className="flex justify-center pt-4">
//         <div className="flex border rounded overflow-hidden">
//           <button
//             onClick={() => handlePageChange(currentPage - 1)}
//             className="px-3 py-1 border-r hover:bg-sky-100"
//           >
//             &lt;
//           </button>
//           {Array.from({ length: totalPages }, (_, i) => (
//             <button
//               key={i + 1}
//               onClick={() => handlePageChange(i + 1)}
//               className={`px-3 py-1 border-r text-sky-500 ${
//                 currentPage === i + 1 ? "bg-sky-500 text-white" : ""
//               }`}
//             >
//               {i + 1}
//             </button>
//           ))}
//           <button
//             onClick={() => handlePageChange(currentPage + 1)}
//             className="px-3 py-1 hover:bg-sky-100"
//           >
//             &gt;
//           </button>
//         </div>
//       </div>

//       {/* Chart */}
//       <div>
//         <h2 className="text-xl font-semibold mb-4">Sales Report</h2>
//         <Card className="rounded-2xl shadow-sm">
//           <CardContent className="p-4">
//             <ResponsiveContainer width="100%" height={300}>
//               <LineChart data={chartData}>
//                 <XAxis dataKey="month" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <Line type="monotone" dataKey="direct" stroke="#00c4ff" name="Direct Sales" />
//                 <Line type="monotone" dataKey="retail" stroke="#6c2bd9" name="Retail" />
//                 <Line type="monotone" dataKey="wholesale" stroke="#f52b69" name="Wholesale" />
//               </LineChart>
//             </ResponsiveContainer>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// }
// // const stockData = [       ]
import React from 'react'

const SalesOrders = () => {
  return (
    <div>SalesOrders</div>
  )
}

export default SalesOrders