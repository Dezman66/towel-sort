
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix || !matrix.length) {
    return [];
  }

  const res = [];
  matrix.forEach((subArr, index) => {
    if (index % 2 !== 0) {
      subArr.reverse();
    }
    subArr.forEach(el => res.push(el));    
  });

  return res; 
}
