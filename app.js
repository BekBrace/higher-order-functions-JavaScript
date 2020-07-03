// forEach
// filter
// map
// sort
// reduce

const companies = [
  { name: "Company One", Category: "Finance", start: 1980, end: 1989 },
  { name: "Company Two", Category: "Advertising", start: 1946, end: 1987 },
  { name: "Company Three", Category: "Marketing", start: 1990, end: 1998 },
  { name: "Company Four", Category: "Retail", start: 1981, end: 1998 },
  { name: "Company Five", Category: "Technology", start: 1981, end: 1998 },
  { name: "Company Six", Category: "Retail", start: 1981, end: 1998 },
  { name: "Company Seven", Category: "Food", start: 1976, end: 1998 },
  { name: "Company Eight", Category: "Retail", start: 1980, end: 1981 },
  { name: "Company Ten", Category: "Gold minning", start: 1980, end: 1986 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// Reduce

// let ageSum = 0;

// for (let i = 0; i < ages.length; i++) {
//   ageSum += ages[i];
// }

// Adding numbers using Reduce
// const ageSum = ages.reduce(function (total, age) {
//   return total + age;
// }, 0);

// const ageSum = ages.reduce((total, age) => total + age, 0);

// console.log(ageSum);

////////////////////////////////////////////////////////
// Sort [ Sort companies form early to latest dates]
// const sortedCompanies = companies.sort(function (company1, company2) {
//   if (company1.start > company2.start) {
//     return 1; //true;
//   } else {
//     return -1; //false
//   }
// });

// const sortedCompanies = companies.sort((x, y) => (x.start > y.start ? 1 : -1));

// console.log(sortedCompanies);

// const sortedAges = ages.sort((a, b) => a - b);
// console.log(sortedAges);

////////////////////////////////////////////////////////
// Map -  Create array of company names
// const companyNames = companies.map(function (company) {
//   return `${company.name} START : ${company.start} END: ${company.end}`;
// });

// const companyNames = companies.map(function (company) {
//   return `${company.name} Category : ${company.Category}`;
// });

// const companyNamesArrow = companies.map(
//   (company) => `${company.name} Category : ${company.Category}`
// );

// console.log(companyNamesArrow);

////////////////////////////////////////////////////////

// const canSmoke = ages.filter(function (age) {
//   if (age >= 21) {
//     return true;
//   }
// });

// Arrow functions with Filter [ filter age > 21 ]
// const canSmoke = ages.filter((age) => age >= 21);
// console.log(canSmoke);

// Filter retail companies - normal way
// const retailCompanies = companies.filter(function (company) {
//   if (company.Category === "Retail") {
//     return true;
//   }
// });

// Filter retail companies using arrow functions
// const retailCompanies = companies.filter(
//   (company) => company.Category === "Retail"
// );

// console.log(retailCompanies);

/////////////////////////////////////////////////////////////
// for loop
// for (i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }

// forEach loop
// companies.forEach(function (company) {
//   console.log(company);
// });
