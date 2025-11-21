import { Card, CardContent } from "@/components/ui/card-item";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";

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

export default function StockChart() {
  return (
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
  );
}
