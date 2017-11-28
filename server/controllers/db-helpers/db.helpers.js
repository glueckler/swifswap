const _ = require('lodash')

module.exports = {

  flattenQuery: function (arr) {
    if (!arr || arr.length === 0) {
      return arr
    }
    function customizer (objValue, srcValue) {
      if (objValue !== srcValue) {
        if (Array.isArray(objValue)) {
          if (!_.includes(objValue, srcValue)) {
            objValue.push(srcValue)
            return objValue
          }
        } else {
          return [objValue, srcValue]
        }
      }

      return objValue
    }
    return arr.reduce((a, b) => {
      return _.mergeWith(a, b, customizer)
    })
  },

  flattenChats: function (chats) {
    return Object.values(chats.map(chat => {
      return {
        id: chat.chatId,
        updated: chat.chatUpdated,
        created: chat.chatCreated,
        sender: {
          name: chat.senderName,
          id: chat.senderId
        },
        receiver: {
          name: chat.receiverName,
          id: chat.receiverId
        },
        senderItem: chat.senderId === chat.itemUserId && { id: chat.itemId, name: chat.itemName, description: chat.itemDescription, photo: chat.itemPhoto },
        receiverItem: chat.receiverId === chat.itemUserId && { id: chat.itemId, name: chat.itemName, description: chat.itemDescription, photo: chat.itemPhoto }
      }
    }).reduce((output, chat) => {
      if (chat.id in output) {
        if (chat.senderItem) {
          output[chat.id].senderItem = chat.senderItem
        }
        if (chat.receiverItem) {
          output[chat.id].receiverItem = chat.receiverItem
        }
      } else {
        output[chat.id] = {
          ...chat
        }
      }
      return output
    }, {}))
  },

  getTagIdsByTagName: function (db, arr) {
    return db.select('id').from('tags').whereIn('name', arr).then(data => {
      return data.map(a => a.id)
    })
  }

}
