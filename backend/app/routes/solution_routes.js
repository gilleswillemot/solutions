var ObjectID = require('mongodb').ObjectID;

// Getting a solution via the document ID
module.exports = function (app, db) {
  app.get('/solution/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('solutions').findOne(details, (err, item) => {
      if (err) {
        res.send({ 'error': 'An error has occurred when getting the solution with id: ' + id });
      } else {
        res.send(item);
      }
    });
  });

// Posting a solution to a problem.
  app.post('/solution', (req, res) => {
    const solution = { problem: req.body.problem, solution: req.body.solution, tags: req.body.tags };
    db.collection('solutions').insert(solution, (err, result) => {
      if (err) {
        res.send({ 'error': 'An error has occurred when inserting a solution' });
      } else {
        res.send(result.ops[0]);
      }
    });
  });

  app.delete('/notes/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('notes').remove(details, (err, item) => {
      if (err) {
        res.send({ 'error': 'An error has occurred' });
      } else {
        res.send('Note ' + id + ' deleted!');
      }
    });
  });

  app.put('/notes/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    const note = { text: req.body.body, title: req.body.title };
    db.collection('notes').update(details, note, (err, result) => {
      if (err) {
        res.send({ 'error': 'An error has occurred' });
      } else {
        res.send(note);
      }
    });
  });
}