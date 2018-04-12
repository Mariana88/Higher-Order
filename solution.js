// Your code here
var list1 = [
    { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
    { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
  ];
  
  function addGreeting (arr){
    let arrWithGreeting = [];
    let greeting;
      for (let i=0; i<arr.length; i++){
        arrWithGreeting[i] = arr[i];
        let firstName = arrWithGreeting[i].firstName;
        let language = arrWithGreeting[i].language;
        arrWithGreeting[i]['greeting'] = "Hi " + firstName + ", what do you like the most about " + language + "?";
      }
    return arrWithGreeting;
}

/* I believe it is more appropriate to write it keeping the name of the original array
 as it is most probably what the receiving component would expect in this case. 
 Also it spares a  useless operations of copying the existing array into a new one. 
 As follows:
 

let list1 = [
        { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
        { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
        { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
      ];

function addGreeting (arr){
    let greeting;
      for (let i=0; i<arr.length; i++){
        let firstName = arr[i].firstName;
        let language = arr[i].language;
        arr[i]['greeting'] = "Hi " + firstName + ", what do you like the most about " + language + "?";
      }
    return arr;
}

 */

// Be sure it's the cleanest code you can write!