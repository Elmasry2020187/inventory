import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./components/layout/Layout";
import Inventory from "./pages/Inventory";
import SalesOrders from "./pages/SalesOrders";
import Suppliers from "./pages/Suppliers";
import Reports from "./pages/Reports";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Parent Route */}
        <Route path="/" element={<Layout className="text-2xl bg-green-500" />}>
          <Route index element={<Dashboard />} />

          {/* Nested Route */}
          <Route path="inventory" element={<Inventory />} />
          <Route path="sales-orders" element={<SalesOrders />} />
          <Route path="suppliers" element={<Suppliers />} />
          <Route path="reports" element={<Reports />} />
        </Route>
             <Route path="signin" element={<h1>Sign in</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
