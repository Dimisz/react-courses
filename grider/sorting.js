// sorting numbers
const data = [5, 10, 4, 3]; 
// 10 will be the first num
// since js compares strings
data.sort();
console.log(data);

// the correct way
data.sort((a, b) => {
  return b - a; // reverse order otherwise use a - b
});
console.log(data);

// sorting strings
const stringsData = ['t', 'A', 'a', 'B', 'b'];
// default: Uppercase first
stringsData.sort();
console.log(stringsData);

stringsData.sort((a, b) => {
  return a.localeCompare(b);
});
console.log(stringsData);


// sorting objects
const objData = [
  { name: 'Tomato', cost: 10, weight: 5 },
  { name: 'Carrot', cost: 15, weight: 2 },
  { name: 'Onion', cost: 5, weight: 7 },
];

const getSortValue = (vegetable) => {
  return vegetable.name;
};

objData.sort((a, b) => {
  const valueA = getSortValue(a);
  const valueB = getSortValue(b);

  if(typeof valueA === 'string'){
    return valueA.localeCompare(valueB);
  }
  else {
    return valueA - valueB;
  }
});
console.log(objData);