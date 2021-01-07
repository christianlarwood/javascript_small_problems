const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

function countOccurrences(vehicles) {
  let result = {};
  vehicles.forEach(vehicle => {
    if (!result[vehicle]) {
      result[vehicle] = 1;
    } else {
      result[vehicle] += 1;
    }
  })
 
  Object.keys(result).forEach(key => {
    console.log(`${key} => ${result[key]}`);
  })
}

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2