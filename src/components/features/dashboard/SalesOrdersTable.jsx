<<<<<<< HEAD
import { Card, CardContent } from "@/components/ui/Card";
=======
import { Card, CardContent } from "@/components/ui/card";
>>>>>>> feature/dashboard-refactor
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
<<<<<<< HEAD
} from "@/components/ui/Table";
=======
} from "@/components/ui/table";
>>>>>>> feature/dashboard-refactor

const salesOrders = [
  { channel: "Direct Sales", draft: 2, confirmed: 32, packed: 42, shipped: 23, invoiced: 7 },
  { channel: "Wholesale", draft: 0, confirmed: 41, packed: 33, shipped: 11, invoiced: 14 },
  { channel: "Retail", draft: 2, confirmed: 12, packed: 25, shipped: 16, invoiced: 21 },
];

export default function SalesOrdersTable() {
  return (
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
  );
}
