import React from 'react'
import {Card} from '../ui/Card'
import { useInventoryStore } from '../../store/useInventoryStore'

const FastMovingItems = () => {
  const { getFastMovingItems } = useInventoryStore()
  const items = getFastMovingItems()

  return (
    <Card>
      <div className="text-sm text-gray-600 mb-2">Fast Moving Items</div>
      <ul>
        {items.map((it) => (
          <li key={it.id} className="py-1 flex justify-between">
            <span>{it.name}</span>
            <span className="text-gray-500">{it.sold}</span>
          </li>
        ))}
      </ul>
    </Card>
  )
}

export default FastMovingItems
