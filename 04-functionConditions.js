function boardgames(num) {
  if (num == 1) {
    return "Play Uno!";
  }
  else if (num == 2) {
    return "Play Settlers of Catan!";
  }
  else if (num == 3) {
    return "Play Risk!";
  }
  else {
    return "Play Monopoly!";
  }
}

console.log(boardgames(1));
console.log(boardgames(2));
console.log(boardgames(3));
console.log(boardgames(10));
