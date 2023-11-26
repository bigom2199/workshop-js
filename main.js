// 

console.log("hej");

ex1:
const Date = new Date();
let day = date.getDate();
let month = date.getMonth() +  1
let year = date.getFullYear();
let fullDate = `${day} -${month} -${year}`;


console.log(fullDate);

ex2:

const todayDate = date.toJSON();
console.log(todayDate.slice(0,12));


ex3:
function sundayOnJanuaryFirstday(){
    for (let year = 2014; year<= 2050;year++);
    const date = new date();
    if (date.getDate=== 0){
        console.log(`sunday is a januaryFirstDay and year`);
    }
}
      ex4:

function calculate(num1,num2, operation){
    if(operation=== multiply);

function multiply(x, y){
    return 12*10; // 120

}
function divide(x , y){
    if (y === 0){
        throw new Error("can not devide be zero");

    }
    return x / y ; // 12 / 10 
}
  ex5:
  //
  ex6:
  function removeChracter(String , index){
    character1 = s.substring(0,index);
    character2 = s.substring(index +1,s.length);
    return character1 + character2 ;
  }
   console.log(removeChracter("",1));

   ex7:
   function reverseString(string){
    console.log(string.split("").reverse().join(""));
    reverseString("");
   }


ex8:
function calculationSum(array){
    let sum=0;
    for (let i = 0; i < array.lenght; i++){

    }
    ex9:
    function findLargeNumber(array){
        let large = array[0];
        for (let i = 0; i<array.lenght; i++){
            if(array [i] > large){
                large = array[i];

            }
            return large; 
        }
    }
}
ex10:
function evenNumber(array){
    const evenNumber = array.fiter(number => number % 2=== 0 );
    return filterArray;
    const array = [2,4,6,8,10,12];
    console.log(filterEven(array));

    let evenNumbers = numbers.filter(number => number % 2 ===0);
}
ex11:
//

ex12:
function square (number){
    return number;  

}
   const array = new array[1,2,3,4];
   const newArray = array.map(square);
   console.log(newArray);


   ex13:
   const Person ={
    name: "Ali",
    age : 25,
  address :{"countere Iran", "city Tehran" },
  
  }

  ex14:
  function property(object, property){
    return object[property];
  }
   console.log(property(person,"age","name","address"));

ex15:
 function addProperty(object,propertyName,propertyAge){
    object[propertyName] = [propertyValue];

 }

   }


   

















