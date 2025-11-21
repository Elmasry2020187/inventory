import React from 'react'
import Button from '../ui/Button'
import { useInventoryStore } from '../../store/useInventoryStore'

const QuickActions = () => {
  const { addOrder } = useInventoryStore()

  const addSampleOrder = () => {
    const order = { id: `o${Date.now()}`, date: new Date().toISOString().slice(0, 10), customer: 'Quick', lines: [{ itemId: 'i2', qty: 1 }] }
    addOrder(order)
  }

  return (
    <div className="flex gap-2">
      <Button onClick={addSampleOrder}>Add Sample Order</Button>
      <Button className="bg-green-600">Receive Stock</Button>
    </div>
  )
}

export default QuickActions
