let queue = [
  "catHorse",
  "dogPig",
  "catHorse",
  "dogPig",
  "kangarooBear",
  "dogPig",
  "catHorse",
  "catHorse",
  "dogPig",
];

queue.push('catHorse');
console.log(queue);

queue.shift();
console.log(queue);

queue.unshift('owlDownkey');
console.log(queue);

queue.pop();
console.log(queue);

queue.splice((queue.length / 2), 1);
console.log(queue);

const unofficialQueue = [
  "rabbitSalmon",
  "rabbitSalmon",
  "rabbitSalmon",
  "rabbitSalmon",
];
queue = queue.concat(unofficialQueue)
console.log(queue);