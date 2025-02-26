// Create an array to store companies -> "Bloomberg","Microsoft","Uber","Google","IBM","Netflix"
const companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]
console.log(`Companies: ${companies}`);

// a) Remove first company from the array
{
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]
companies.shift()
console.log(`First company is removed: ${companies}`);
}

//b) Remove Uber and add OLA at its place
{
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]
companies.splice(2, 1, "OLA")
console.log(`Uber is replaced by OLA: ${companies}`);
}

//c) Add Amazon at the end
{
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]
companies.push("Amazon")
console.log(`Amazon is added at the end: ${companies} `);
}