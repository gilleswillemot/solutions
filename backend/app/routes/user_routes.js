// All routes for creation (registration), and profile updates of a user goes here.

module.exports = function (app, db) {

    // POST - Registration of a new user.
    app.post('/user', (req, res) => {
      const user = { firstname: req.body.firstname, surname: req.body.surname, email: req.body.email };
      db.collection('solutions').insert(user, (err, result) => {
        if (err) {
          res.send({'error': 'An error has occurred when creating user with name: ' + user.firstname });
        } else {
          res.send(result.ops[0]);
        }
      });
    });

    // other routes ...
  };