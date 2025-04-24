// part1

let boyName = 'Dave';
const age = 12;

console.log("Hi! His name is " + boyName + " and he is " + age + " years old.");

boyName = 'Bartholomew';

console.log('Hi! His name is ' + boyName + ' and he is ' + age + ' years old.');


// part2

const studentsList = ['Lisa', 'Yaroslav', 'Kate', 'Abraham', 'Max'];

studentsList.forEach((student) => {
    console.log(student.toUpperCase());
});

studentsList.push('Dima');
console.log(studentsList);

// Alternative way to loop through the array

//for (let i = 0; i < studentsList.length; i++) {
//    console.log(studentsList[i].toUpperCase());
//}

// part3

const hobby = {
    hobbyName: 'sleeping',
    inInfoor: true,
    weeklyHours: 48,
    tools: ['bed', ' pillow', ' blanket'],
    getHobbySummary() {
        return "My hobby is " + this.hobbyName + ". I spend " + this.weeklyHours + " hours a week on it. I do it " + (this.inInfoor ? 'indoors' : 'outdoors') +  " while using " + this.tools + ".";
    }
};

console.log(hobby.getHobbySummary());

const { hobbyName, weeklyHours, inInfoor, tools } = hobby;
console.log("My hobby is " + hobbyName + ". I spend " + weeklyHours + " hours a week on it. I do it " + (inInfoor ? 'indoors' : 'outdoors') +  " while using " + tools + ".");

//part4 

function checkNumberType(num) {
    if (num > 0) return 'Positive';
    else if (num < 0) return 'Negative';
    else return 'Zero';
  }
  
  console.log(checkNumberType(1));
  console.log(checkNumberType(-1));
  console.log(checkNumberType(0));

// part5

class Hobby {
    constructor(name, isIndoor, weeklyHours) {
      this.name = name;
      this.isIndoor = isIndoor;
      this.weeklyHours = weeklyHours;
    }
  
    describe() {
      console.log(`My hobby is ${this.name}. It's ${this.isIndoor ? 'an indoor activity' : 'an outdoor activity'}, and I spend ${this.weeklyHours} hours a week on it.`);
    }
  }
  const gaming = new Hobby('gaming', true, 7);
  const boardGames = new Hobby('boardGames', true, 6);
  
  gaming.describe();
  boardGames.describe();