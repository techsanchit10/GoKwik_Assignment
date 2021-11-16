// SAMPLE TEST CASE #1

let queries = 2;
let containersTestCases = [
  [
    [1, 3, 1],
    [2, 1, 2],
    [3, 3, 3],
  ],
  [
    [0, 2, 1],
    [1, 1, 1],
    [2, 0, 0],
  ],
];

// SAMPLE TEST CASE #2

// let queries = 2;
// let containersTestCases = [
//   [
//     [1, 1],
//     [1, 1]
//   ],
//   [
//     [0, 2],
//     [1, 1],
//   ],
// ];

const organizeBalls = (containers) => {
  const n = containers.length;
  // number of balls per container
  let ballsInContainerCount = new Array(n).fill(0); 
  // number of each type of balls
  let ballTypesCount = new Array(n).fill(0); 

  for (let i = 0; i < n; i++) {
    let container = containers[i];
    for (let j = 0; j < n; j++) {
      let ballCount = container[j];
      ballsInContainerCount[i] += ballCount;
      ballTypesCount[j] += ballCount;
    }
  }
  
  // sorting to make both count arrays comparable
  ballsInContainerCount.sort();
  ballTypesCount.sort();

  for (let i = 0; i < n; i++) {
    // Comparing each container count with total ball count
    if (ballsInContainerCount[i] !== ballTypesCount[i]) return "Impossible";
  }
  return "Possible";
}

for(let i = 0; i < queries; i++) {
  console.log(organizeBalls(containersTestCases[i]));
}

