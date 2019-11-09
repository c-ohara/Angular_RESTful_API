const Tasks = require('./../controllers/Tasks');

module.exports = (app) => {
  app.get('/Tasks', Tasks.index);
  app.post('/Tasks', Tasks.create);
  app.get('/Tasks/:id', Tasks.show);
  app.put('/Tasks/:id', Tasks.update);
  app.delete('/Tasks/:id', Tasks.remove);
}