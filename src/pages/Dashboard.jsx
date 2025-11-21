import React from "react";
import { Card, CardContent } from "@/components/ui/Card"
import { LineChart, CalendarDays, DollarSign, ShoppingBag } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/Table";

const stats = [
  {
    icon: <LineChart className="text-sky-500" />,
    value: "143.3k",
    label: "Today's Sale",
    bg: "bg-sky-100",
  },
  {
    icon: <CalendarDays className="text-purple-600" />,
    value: "$250,423",
    label: "Yearly Total Sales",
    bg: "bg-purple-100",
  },
  {
    icon: <DollarSign className="text-orange-500" />,
    value: "$68.9k",
    label: "Net Income",
    bg: "bg-orange-100",
  },
  {
    icon: <ShoppingBag className="text-pink-500" />,
    value: "343",
    label: "Products",
    bg: "bg-pink-100",
  },
];

const stockData = [
  { month: "Jan", stockIn: 8000, stockOut: 3000 },
  { month: "Feb", stockIn: 7000, stockOut: 2500 },
  { month: "Mar", stockIn: 8500, stockOut: 3000 },
  { month: "Apr", stockIn: 9000, stockOut: 3500 },
  { month: "May", stockIn: 5000, stockOut: 2000 },
  { month: "Jun", stockIn: 7000, stockOut: 3000 },
  { month: "Jul", stockIn: 8000, stockOut: 3500 },
  { month: "Aug", stockIn: 10000, stockOut: 4000 },
  { month: "Sep", stockIn: 9000, stockOut: 3500 },
  { month: "Oct", stockIn: 7000, stockOut: 2500 },
  { month: "Nov", stockIn: 8000, stockOut: 3000 },
  { month: "Dec", stockIn: 6000, stockOut: 2500 },
];

const salesOrders = [
  {
    channel: "Direct Sales",
    draft: 2,
    confirmed: 32,
    packed: 42,
    shipped: 23,
    invoiced: 7,
  },
  {
    channel: "Wholesale",
    draft: 0,
    confirmed: 41,
    packed: 33,
    shipped: 11,
    invoiced: 14,
  },
  {
    channel: "Retail",
    draft: 2,
    confirmed: 12,
    packed: 25,
    shipped: 16,
    invoiced: 21,
  },
];

export default function Dashboard() {
  return (
    <div className="p-6 bg-[#f5f6fc] min-h-screen space-y-8">
      <div>
        <h2 className="text-xl font-semibold mb-4">Sales Summary</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <Card key={index} className="rounded-2xl shadow-sm">
              <CardContent className="flex items-center space-x-4 p-4">
                <div className={`p-3 rounded-full ${stat.bg}`}>
                  {stat.icon}
                </div>
                <div>
                  <p className="text-md font-semibold">{stat.value}</p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Stock Report</h2>
        <Card className="rounded-2xl shadow-sm">
          <CardContent className="p-4">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={stockData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="stockIn" stackId="a" fill="#00c4ff" name="Stock In" />
                <Bar dataKey="stockOut" stackId="a" fill="#6c2bd9" name="Stock Out" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Sales Order</h2>
          <button className="text-sky-500 font-medium text-sm">Last 7 Days ▾</button>
        </div>
        <Card className="rounded-2xl shadow-sm">
          <CardContent className="p-0">
            <Table>
              <TableHeader className="bg-[#f1f2f7]">
                <TableRow>
                  <TableHead>Channel</TableHead>
                  <TableHead>Draft</TableHead>
                  <TableHead>Confirmed</TableHead>
                  <TableHead>Packed</TableHead>
                  <TableHead>Shipped</TableHead>
                  <TableHead>Invoiced</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {salesOrders.map((row, idx) => (
                  <TableRow key={idx}>
                    <TableCell>{row.channel}</TableCell>
                    <TableCell>{row.draft}</TableCell>
                    <TableCell>{row.confirmed}</TableCell>
                    <TableCell>{row.packed}</TableCell>
                    <TableCell>{row.shipped}</TableCell>
                    <TableCell>{row.invoiced}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
