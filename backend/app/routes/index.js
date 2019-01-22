const solutionRoutes = require('./solution_routes');
const userRoutes = require('./user_routes');

module.exports = function(app, db) {
  solutionRoutes(app, db);
  userRoutes(app, db);
};