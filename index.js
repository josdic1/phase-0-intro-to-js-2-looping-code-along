function countDown(end) {
    while (end >= 0) {
      console.log(end);
      end--;
    }
  }

  function writeCards(names, occasion) {
    return names.map(name => `Thank you, ${name}, for the wonderful ${occasion} gift!`);
  }