import React from 'react'

const StockChart = ({ items = [] }) => {
  // Simple sparkline-style SVG based on stock values
  const values = items.map((i) => i.stock)
  const max = Math.max(...values, 1)
  const points = values
    .map((v, idx) => {
      const x = (idx / Math.max(values.length - 1, 1)) * 100
      const y = 100 - (v / max) * 100
      return `${x},${y}`
    })
    .join(' ')

  return (
    <div className="p-4 bg-white rounded shadow">
      <div className="text-sm text-gray-600 mb-2">Stock Levels</div>
      <svg viewBox="0 0 100 100" width="100%" height="80">
        <polyline fill="none" stroke="#3b82f6" strokeWidth="2" points={points} />
      </svg>
    </div>
  )
}

export default StockChart
