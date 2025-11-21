export const items = [
  { id: 'i1', name: 'Widget A', stock: 120 },
  { id: 'i2', name: 'Widget B', stock: 45 },
  { id: 'i3', name: 'Gadget X', stock: 200 },
  { id: 'i4', name: 'Gadget Y', stock: 5 },
  { id: 'i5', name: 'Part Z', stock: 78 }
]

export const orders = [
  { id: 'o1', date: '2025-11-01', customer: 'Acme', lines: [{ itemId: 'i1', qty: 10 }, { itemId: 'i2', qty: 5 }] },
  { id: 'o2', date: '2025-11-03', customer: 'Beta Co', lines: [{ itemId: 'i3', qty: 2 }] },
  { id: 'o3', date: '2025-11-10', customer: 'Gamma LLC', lines: [{ itemId: 'i1', qty: 4 }, { itemId: 'i5', qty: 20 }] }
]

export const suppliers = [
  { id: 's1', name: 'Supplier One', contact: 'supplier1@example.com' },
  { id: 's2', name: 'Supplier Two', contact: 'supplier2@example.com' }
]

export default { items, orders, suppliers }
