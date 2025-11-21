import React from "react";
import { Card, CardContent } from "@/components/ui/Card";
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
} from "@/components/ui/table";

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
    <div className="p-6 bg-background min-h-screen space-y-8">
      <StatsCards />
      <StockChart />
      <SalesOrdersTable />
    </div>
  );
}
