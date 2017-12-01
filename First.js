function sumSq(x, y) {
  return x * x + y * y;
}

module.exports = {
  PHI: 1.618,
  explain: function() {
    console.log("(X+Y) is to X as X is to Y: (X+Y)≈" + this.PHI);
  },
  pythagoreanTheorem: function(x, y) {
    return Math.sqrt(sumSq(x, y));
  }
};
