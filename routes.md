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
  curl -X POST -i localhost:3000/api/users -d "username=deanosaur" -d "password=asdf" -d "email=dean@dean.com" -d "location=Vancouver"
  curl -X POST -i localhost:3000/api/users -d "username=deano" -d "password=asdf" -d "email=dean@dean.DEAN" -d "location=Vancouver" -d "img_path=/source/profile/image"
  
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
  - curl -X POST localhost:3000/api/session -d "account=mbinny0" -d "password=tO4NVmU78VMj"
  - curl -X POST localhost:3000/api/session -d "account=cfotitt0@vimeo.com" -d "password=tO4NVmU78VMj"
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
    curl -d '{"name":"A new Item", "description": "Description of an item to trade :)", "imageUrl": "http://dummyimage.com/300x500.jpg/5fa2dd/ffffff", "tags": ["Electronics", "Games"]}' -H "Content-Type: application/json" -X POST -i localhost:3000/api/items


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
  curl -i localhost:3000/api/chats

- Create new chat
  - api.post('chats/:id')
  - db: insert chat
- Delete chat
  - api.delete('chats/:id')
  - delete at chat id

### Messages

- Get messages
  - websockets
