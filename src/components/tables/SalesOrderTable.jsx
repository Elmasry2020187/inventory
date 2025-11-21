import React from 'react'
import Card from '../ui/card-item'

const SalesOrderTable = ({ orders = [] }) => {
  return (
    <Card>
      <div className="text-sm text-gray-600 mb-2">Recent Orders</div>
      <table className="w-full text-left text-sm">
        <thead>
          <tr>
            <th className="py-1">ID</th>
            <th className="py-1">Customer</th>
            <th className="py-1">Date</th>
            <th className="py-1">Lines</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o) => (
            <tr key={o.id} className="border-t">
              <td className="py-2">{o.id}</td>
              <td className="py-2">{o.customer}</td>
              <td className="py-2">{o.date}</td>
              <td className="py-2">{o.lines.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  )
}

export default SalesOrderTable
