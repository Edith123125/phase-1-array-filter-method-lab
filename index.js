// Code your solution here

//  findMatching
function findMatching(names, query1) {
    return names.filter(names => names.toLowerCase() === query1.toLowerCase());
}

// fuzzyMatch
function fuzzyMatch(names, query2) {
    return names.filter(name => name.startsWith(query2));
}

// matchName
function matchName(driverObjects, query3) {
    return driverObjects.filter(driver => driver.name === query3);
}

const names = ["Sally", "Sam", "Sara", "Ann"];
const driverObjects = [
    { name: "Sally", hometown: "New York" },
    { name: "Sam", hometown: "Los Angeles" },
    { name: "Sara", hometown: "Chicago" },
    { name: "Ann", hometown: "Houston" }
];

console.log(findMatching(names, "sally")); 
console.log(fuzzyMatch(names, "Sa"));
console.log(matchName(driverObjects, "Sam")); 