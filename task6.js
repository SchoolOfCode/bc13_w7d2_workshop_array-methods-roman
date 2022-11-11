const broomCupboard = [2, 4, 1, 3, 7, 5, 8, 6, 10, 9, 0];

const potions = [
  { name: "polyjuice potion", shelf: 2 },
  { name: "draught of living death", shelf: 4 },
  { name: "pepperup potion", shelf: 1 },
  { name: "veritaserum", shelf: 3 },
];

const students = [
  "Cedric Diggory",
  "Padma Patil",
  "Lucius Malfoy",
  "Seamus Finnigan",
  "Lavender Brown",
  "Luna Lovegood",
  "Gregory Goyle",
];

broomCupboard.sort((a, b) => a - b);
console.log(broomCupboard);

potions.sort((a, b) => b.shelf - a.shelf);
console.log(potions);

students.sort((a, b) => {
  if (a.split(' ')[1] == b.split(' ')[1]) {
    return 0;
  } else if (a.split(' ')[1] < b.split(' ')[1]) {
    return -1;
  } else {
    return 1;
  }
});
console.log(students);