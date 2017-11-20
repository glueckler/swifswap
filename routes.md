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
    -{
    "name": "nulla nunc purus phasellus",
    "description": "augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida",
    "img_path": [
        "http://dummyimage.com/154x141.bmp/dddddd/000000",
        "http://dummyimage.com/187x211.bmp/dddddd/000000",
        "http://dummyimage.com/197x119.jpg/dddddd/000000",
        "http://dummyimage.com/222x165.bmp/5fa2dd/ffffff"
    ],
    "tagName": "Music"
    }
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
