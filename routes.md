Routes
------

api = new Express.router()
app.use("/api", api)

app.get('all', serve react)


API
---

### User

- See user profile
  - api.get('/users/:id')
- Create new user
  - api.post('/users')
- Update user profile
  - api.put('/users/:id')
- Delete account
  - api.delete('/users/:id')

### Session

- Login
  - api.post('/session')
- Logout
  - api.delete('/session')

### Item

- See item
  - api.get('items/:id')
- Create item
  - api.post('items')
- Update item
  - api.put('items/:id')
- Delete item
  - api.delete('items/:id')

### Chat

- Get chat rooms
  - api.get('chats')
- Create new chat
  - api.post('chats/:id')
- Delete chat
  - api.delete('chats/:id')

### Messages

- Get messages
  - websockets

















