const athletes = [  {
    name: "Usain Bolt",
    sport: "Track and Field",
    hasWorldRecord: true,
    gender: "Male",
    age: 35,
    totalMedals: 8,
    country: "Jamaica",
  },
  {
    name: "Simone Biles",
    sport: "Gymnastics",
    hasWorldRecord: false,
    gender: "Female",
    age: 25,
    totalMedals: 12,
    country: "United States",
  },
  {
    name: "Michael Phelps",
    sport: "Swimming",
    hasWorldRecord: true,
    gender: "Male",
    age: 37,
    totalMedals: 28,
    country: "United States",
  },
  {
    name: "Katie Ledecky",
    sport: "Swimming",
    hasWorldRecord: true,
    gender: "Female",
    age: 25,
    totalMedals: 10,
    country: "United States",
  },
  {
    name: "Allyson Felix",
    sport: "Track and Field",
    hasWorldRecord: false,
    gender: "Female",
    age: 36,
    totalMedals: 9,
    country: "United States",
  },
  {
    name: "Nadia Comăneci",
    sport: "Gymnastics",
    hasWorldRecord: true,
    gender: "Female",
    age: 60,
    totalMedals: 9,
    country: "Romania",
  },
  {
    name: "Birgit Fischer",
    sport: "Canoeing",
    hasWorldRecord: true,
    gender: "Female",
    age: 60,
    totalMedals: 12,
    country: "Germany",
  },
  {
    name: "Mariana Pajón",
    sport: "Cycling",
    hasWorldRecord: false,
    gender: "Female",
    age: 30,
    totalMedals: 4,
    country: "Colombia",
  },
  {
    name: "Wayne Gretzky",
    sport: "Ice Hockey",
    hasWorldRecord: false,
    gender: "Male",
    age: 61,
    totalMedals: 4,
    country: "Canada",
  },
  {
    name: "Yuna Kim",
    sport: "Figure Skating",
    hasWorldRecord: false,
    gender: "Female",
    age: 31,
    totalMedals: 6,
    country: "South Korea",
  },
];


// Task1

const worldRecordAthletes = athletes.filter(athlete => athlete.hasWorldRecord);
console.log(worldRecordAthletes);

// Task2

const FemaleAthletes = athletes.filter(athlete => athlete.gender === 'Female' && athlete.totalMedals >= 10);
console.log(FemaleAthletes);

// Task3

const athleteNames = athletes.map(athlete => athlete.name);
console.log(athleteNames);

// Task4

const athleteNamesAndCountries = athletes.map(athlete => ({ name: athlete.name, country: athlete.country }));
console.log(athleteNamesAndCountries);

// Task5

const totalMedals = athletes.reduce((total, athlete) => total + athlete.totalMedals, 0);
console.log(totalMedals);

// Task6

const findAthleteByName = name => athletes.find(athlete => athlete.name === name);
console.log(findAthleteByName("Usain Bolt"));


// Task7

const checkWorldRecord = name => {
    const athlete = athletes.find(athlete => athlete.name === name);
    if (athlete) {
        return athlete.hasWorldRecord ? "This athlete has a world record." : "This athlete does not have a world record.";
    } else {
        return "Athlete not found.";
    }
};

console.log(checkWorldRecord("Usain Bolt")); 



// Task8

const americanWorldRecordAthletes = athletes.filter(athlete => athlete.country === 'United States' && athlete.hasWorldRecord).map(athlete => athlete.name);
console.log(americanWorldRecordAthletes);

// Task9

const maleAthletes = athletes.filter(athlete => athlete.gender === 'Male');
const averageMaleAge = maleAthletes.reduce((total, athlete) => total + athlete.age, 0) / maleAthletes.length;
console.log(averageMaleAge);
