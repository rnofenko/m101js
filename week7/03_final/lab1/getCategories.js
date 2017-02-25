db.item.aggregate([
  { $group: { _id: "$category", num: { $sum: 1 } } },
  { $sort: { "_id": 1 } }
])