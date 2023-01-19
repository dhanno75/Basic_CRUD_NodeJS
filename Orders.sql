[
{ _id: 0, productName: "Steel beam", status: "new", quantity: 10 },
{ _id: 1, productName: "Steel beam", status: "urgent", quantity: 20 },
{ _id: 2, productName: "Steel beam", status: "urgent", quantity: 30 },
{ _id: 3, productName: "Iron rod", status: "new", quantity: 15 },
{ _id: 4, productName: "Iron rod", status: "urgent", quantity: 50 },
{ _id: 5, productName: "Iron rod", status: "urgent", quantity: 10 }
]

[
{ _id: 0, productName: "Steel beam", totalUrgentQuantity: 10 },
{ _id: 5, productName: "Iron rod", totalUrgentQuantity: 10 }
]

Select productName, _id, SUM(quantity) as totalUrgentQuantity Where status = 'urgent' group by productName;

db.orders.aggregate([
  {$match: {$status: 'urgent'}}
])

-- Can you please explain again why $ symbol is there in $productName?