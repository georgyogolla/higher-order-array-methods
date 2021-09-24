const companies = [
  {name: "Company One", category: "Finance", start: 1981, end: 2003},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989},
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//for loop
// for(let i = 0; i < companies.length; i++ ){
//   console.log(companies[i]);
// }
// forEach
// companies.forEach(function(company){
//   console.log(company.category);
// });
// filter
// let canDrink = [];
// for (let i = 0; i < ages.length; i++){
//   if(ages[i] >= 21) {
//     canDrink.push(ages[i]);
//   }
// }
// console.log(canDrink);

//Get age 21 or older
// const canDrink = ages.filter(age => age >= 21);
// console.log(canDrink);

//Filter retail companies

// const retailCompanies = companies.filter(function(company){
//   if(company.category === 'Retail') {
//     return true;
//   }
// });

// short method for getting retail companies
// retailCompanies = companies.filter(company => company.category === 'Retail')
// console.log(retailCompanies);

//Get 80s companies
// const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));
// console.log(eightiesCompanies);

//companies that lasted atleast 10 years
// const atleastTenYears = companies.filter(company => (company.end - company.start >= 10))
// console.log(atleastTenYears);


// map
// create an array of company names
// const companyNames = companies.map(company => company.name);
// console.log(companyNames);

// return company name with the start and end year

// const companyNameYear = companies.map(function(company){
//   return `${company.name} lasted from ${company.start} to ${company.end}`;
//   });
// console.log(companyNameYear);

// return company name with the start and end year using arrow functions
// const companyNameYear = companies.map(company => 
//    `${company.name} lasted from ${company.start} to ${company.end}`);
// console.log(companyNameYear);

//Getting square roots of age using map
// const agesSquareRoot = ages
// .map(age => Math.floor(Math.sqrt(age)))
// .map(age => age * 2);
// console.log(agesSquareRoot);
// sort
//sorting company start dates from oldest to newest

// const sortedCompanies = companies.sort(function(a, b){
//   if(a.start > b.start){
//     return 1;
//   } else {
//     return -1;
//   }
// })
// console.log(sortedCompanies);

//short method
// const sortedCompanies = companies.sort((a, b) => (a.start > b.start? 1 : -1));
// console.log(sortedCompanies);

//sorting ages
// const sortAges = ages.sort((a, b) => (a - b));
// console.log(sortAges);

// reduce
// add all ages together using for loop
// let sumOfAges = 0;
// for(let i = 0; i < ages.length; i++){
//   sumOfAges += ages[i];
// }
// console.log(sumOfAges);

// add all ages together using reduce
// const sumOfAges = ages.reduce(function(total, age){
//   return total + age;
// }, 0);
// console.log(sumOfAges);

// add all ages together using reduce and arrow functions
// const sumOfAges = ages.reduce((total, age) => total + age, 0);
// console.log(sumOfAges);

//Get total years for all companies
// const yearsTotal = companies.reduce(function(total, company){
//   return total + (company.end - company.start);
// }, 0);
// console.log(yearsTotal);

//Get total years for all companies using reduce and arrow function

// const yearsTotal = companies.reduce((total, company) => total + (company.end - company.start), 0);
// console.log(yearsTotal);

//combined method

const combined = ages
.map(age => age * 2)
.filter(age => age >= 40)
.sort((a, b) => a - b)
.reduce((a, b) => a + b);
console.log(combined);