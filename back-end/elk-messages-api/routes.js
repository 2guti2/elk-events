function hasOwnProps(propsArray, obj) {
  let hasProps = true;
  propsArray.forEach(prop => {
    hasProps &= obj.hasOwnProperty(prop)
  })
  return hasProps
}

const reqProps = ['title']

module.exports = function (app, repo) {
  app.get('/messages', async (req, res) => {
    const messages = await repo.readMessages()
    res.send(messages)
  })

  app.post('/messages', async (req, res) => {
    const message = req.body
    if(!hasOwnProps(reqProps, message)) {
      res.status(400).send({ message: 'Message is missing its title.' })
      return
    }
    const response = await repo.createMessage(message)
    res.send(response)
  })
};
