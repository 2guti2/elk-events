const Message = require('./message')
const repo = {}

repo.createMessage = async (msg) => {
  const message = new Message(msg)
  return message.save()
}

repo.readMessages = async (msg) => {
  return Message.find({})
}

module.exports = repo
