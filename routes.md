Routes
------

api = new Express.router()
app.use("/api", api)

app.get('all', serve react)


API
---

### User

- See user profile
  - api.get('/user')
- Create new user
  - api.post('/user')
- Update user profile
  - api.put('/user')
- Delete account
  - api.delete('/user')

### Session

- Login
  - api.post('/session')
- Logout
  - api.delete('/session')

### Item

- See item
  - api.get('item')
- Create item
  - api.post('item')
- Update item
  - api.put('item')
- Delete item
  - api.delete('item')

### Chat

- See chat messages
  - api.get('chat')
- Create new chat
  - api.post('chat')
- Delete chat
  - api.delete('chat')

### Messages

- Get messages
  - api.get('message')
- Create message
  - api.post('message')

















