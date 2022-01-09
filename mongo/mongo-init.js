db.auth('admin-user', 'admin-password')

db.categories.insertOne({
    name: 'Category Demo',
    id: 1,
    date: Date.now(),
    todoList: [{ description: 'demo item 1', id: 1 }, { description: 'demo item 1', id: 2 }]
});
