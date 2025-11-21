import StatsCards from "@/components/features/dashboard/StatsCards";
import StockChart from "@/components/features/dashboard/StockChart";
import SalesOrdersTable from "@/components/features/dashboard/SalesOrdersTable";

export default function Dashboard() {
  return (
    <div className="p-6 bg-background min-h-screen space-y-8">
      <StatsCards />
      <StockChart />
      <SalesOrdersTable />
    </div>
  );
}
