import { Card, CardContent } from "@/components/ui/card";
import { LineChart, CalendarDays, DollarSign, ShoppingBag } from "lucide-react";

const stats = [
  { icon: <LineChart className="text-sky-500" />, value: "143.3k", label: "Today's Sale", bg: "bg-sky-100" },
  { icon: <CalendarDays className="text-purple-600" />, value: "$250,423", label: "Yearly Total Sales", bg: "bg-purple-100" },
  { icon: <DollarSign className="text-orange-500" />, value: "$68.9k", label: "Net Income", bg: "bg-orange-100" },
  { icon: <ShoppingBag className="text-pink-500" />, value: "343", label: "Products", bg: "bg-pink-100" },
];

export default function StatsCards() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Sales Summary</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className="rounded-2xl shadow-sm">
            <CardContent className="flex items-center space-x-4 p-4">
              <div className={`p-3 rounded-full ${stat.bg}`}>{stat.icon}</div>
              <div>
                <p className="text-md font-semibold">{stat.value}</p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
