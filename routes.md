Routes
------

API
---

### User

- See user profile
  - api.get('/users/:id')
  - db: Select * from users at id
  - curl -i localhost:3000/api/users/4
- Create new user
  - api.post('/users')
  - db: insert * where user id
  - curl -X POST -i localhost:3000/api/users -d " 
- Update user profile
  - api.put('/users/:id')
  - db: update user at id
- Delete account
  - api.delete('/users/:id')
  - db: delete user at id

### Session

- Login
  - api.post('/session')
  - select password where user at id
  - set cookie
- Logout
  - api.delete('/session')
  - delete cookie
### Item

- See item
  - api.get('items/:id')
  - db: select * item at id
  - curl -i localhost:3000/api/items/7
- Create item
  - api.post('items')
  - db: insert item 
  - curl -X POST -i localhost:3000/api/items -d "name=deansthing" -d "description=thingnumber5"
- Update item
  - api.put('items/:id')
  - db: update item id
- Delete item
  - api.delete('items/:id')
  - db: delete item at id

### Chat

- Get chat rooms
  - api.get('chats')
  - db: select * from chat at user id
- Create new chat
  - api.post('chats/:id')
  - db: insert chat
- Delete chat
  - api.delete('chats/:id')
  - delete at chat id

### Messages

- Get messages
  - websockets

















