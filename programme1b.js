const cities = ["Bengaluru", "Mysuru", "Chikkaballapura", "Tumkur", "Udupi"];
console.log("The total number of cities: " + cities.length);

cities.push("Belagavi");
console.log("The array after pushing an element: " + cities);

cities.shift();
console.log("The array after removing the first city: " + cities);

let cities_indexOf = cities.indexOf("Udupi");
console.log("The index of city 'Udupi' is: " + cities_indexOf);
