module.exports = {
  turtles: getTurtles()
};

function getTurtles() {
  return [
    { id: 1, name: 'Leonardo', location: 'Sewer', img: 'images/leo.gif' },
    { id: 2, name: 'Michelangelo', location: 'China', img: 'images/mike.gif' },
    { id: 3, name: 'Raphael', location: 'Old Port', img: 'images/raph.gif' },
    { id: 4, name: 'Donatello', location: 'Florida', img:'images/don.gif' }
    
  ];
}
