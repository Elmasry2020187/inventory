import React from 'react'
import Card from '../ui/Card'

const SummaryCard = ({ title, value }) => {
  return (
    <Card className="text-center">
      <div className="text-sm text-gray-500">{title}</div>
      <div className="text-2xl font-bold">{value}</div>
    </Card>
  )
}

export default SummaryCard
