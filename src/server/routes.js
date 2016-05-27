var router = require('express').Router();
var four0four = require('./utils/404')();
var data = require('./data');

router.get('/turtles', getTurtles);
router.get('/turtle/:id', getTurtle);
router.get('/*', four0four.notFoundMiddleware);

module.exports = router;

//////////////

function getTurtles(req, res, next) {
  res.status(200).send(data.turtles);
}

function getTurtle(req, res, next) {
  var id = +req.params.id;
  var turtle = data.turtles.filter(function(p) {
    return p.id === id;
  })[0];

  if (turtle) {
    turtleArray = [];
    turtleArray.push(turtle);
    res.status(200).send(turtleArray);
  } else {
    four0four.send404(req, res, 'turtle ' + id + ' not found');
  }
}
