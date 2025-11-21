import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Printer } from "lucide-react";
import React from "react";
import {
  Bar,
  BarChart,
  LabelList,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const performance = [
  { name: "Apple", early: 74, ontime: 18, late: 8 },
  { name: "Samsung", early: 73, ontime: 13, late: 14 },
  { name: "Asus", early: 47, ontime: 18, late: 35 },
  { name: "Xiaomi", early: 67, ontime: 12, late: 21 },
  { name: "Logitech", early: 62, ontime: 28, late: 10 },
];

export default function ReportsPage() {
  return (
    <div className="p-6 space-y-8 bg-[#f5f6fc] min-h-screen">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Reports</h2>
        <Button className="bg-sky-500 hover:bg-sky-600 ">
          <Printer className="w-4 h-4 mr-1" /> Print Reports
        </Button>
      </div>

      {/* Heatmap Grid */}
      <div className="bg-gray-50 p-4 rounded-xl">
        <div className="flex justify-between  text-sm font-medium mb-2">
          <span></span>
          <span className="text-sky-400 cursor-pointer">Aug 19–25</span>
        </div>
        <div className="grid grid-cols-8 gap-1  text-xs">
          <div></div>
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
            <div key={day} className="text-center py-1 font-medium">
              {day}
            </div>
          ))}
          {[...Array(8)].map((_, rowIdx) => (
            <React.Fragment key={rowIdx}>
              <div className="text-right pr-2 pt-1">
                {9 + rowIdx}:00
              </div>
              {Array(7)
                .fill(null)
                .map((_, colIdx) => (
                  <div
                    key={colIdx}
                    className={`h-8 rounded ${
                      rowIdx % 3 === 0 && colIdx % 2 === 0
                        ? "bg-sky-700"
                        : rowIdx % 2 === 0 && colIdx % 3 === 0
                        ? "bg-sky-500"
                        : "bg-sky-300"
                    }`}
                  ></div>
                ))}
            </React.Fragment>
          ))}
        </div>
        <div className="flex justify-center items-center gap-4  text-xs mt-4">
          <div className="flex items-center gap-1"><span className="w-4 h-3 bg-sky-300 rounded"></span> 0–500</div>
          <div className="flex items-center gap-1"><span className="w-4 h-3 bg-sky-500 rounded"></span> 501–1,000</div>
          <div className="flex items-center gap-1"><span className="w-4 h-3 bg-sky-700 rounded"></span> 1,001–5,000</div>
        </div>
      </div>

      {/* Supplier Performance */}
      <div>
        <h3 className="text-lg font-semibold mb-2">
          Supplier Performance Report <span className="text-sm text-gray-500">(Top 5 Suppliers)</span>
        </h3>
        <Card className="rounded-2xl shadow-sm">
          <CardContent className="p-4">
            <ResponsiveContainer width="100%" height={250}>
              <BarChart layout="vertical" data={performance} barSize={18}>
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" width={80} />
                <Tooltip />
                <Legend />
                <Bar dataKey="early" stackId="a" fill="#00c4ff" name="Early">
                  <LabelList dataKey="early" position="inside" />
                </Bar>
                <Bar dataKey="ontime" stackId="a" fill="#fbbf24" name="On Time">
                  <LabelList dataKey="ontime" position="inside" />
                </Bar>
                <Bar dataKey="late" stackId="a" fill="#ec4899" name="Late">
                  <LabelList dataKey="late" position="inside" />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
