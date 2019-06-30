function hasOwnProps(propsArray, obj) {
  let hasProps = true;
  propsArray.forEach(prop => {
    hasProps &= obj.hasOwnProperty(prop)
  });
  return hasProps;
}

const reqProps = ['id', 'user_id', 'event_type', 
  'description', 'category', 'created_at', 
  'additional_user_info', 'user_name']

module.exports = function (app, repo) {
  app.post('/events', async (req, res) => {
    let event = req.body
    if (!hasOwnProps(reqProps, event)) {
      res.status(400).send({ message: 'Missing event information.' })
      return
    }
    console.log(event)
    const response = await repo.saveInFile(event)
    res.send(response)
  })
};
