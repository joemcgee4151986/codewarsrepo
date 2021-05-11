/*function grow(x){
return x.reduce((sum, num) => (sum * num), 1);
}

function noSpace(x){
  return x.split(' ').join ('');
}

function abbrevName(name){
  var nam = name.split(' ');
  return nam[0].charAt(0).toUpperCase()+ '.' + nam[1].charAt(0).toUpperCase() +'';
    
}

const binaryArrayToNumber = arr => {
  return parseInt (arr.join(''), 2)
};

function findLongest(array){
 var newArr=array.slice().sort(function(a,b){
   return b.toString().length-a.toString().length;
   
 })
 return newArr[0];
}

function getCount(str) {
  var vowelsCount = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u']
  for(let char of str){
    if(vowels.includes(char)){
      vowelsCount++
    }
  }
  // enter your majic here
  
  return vowelsCount;
}

function capitalize(s){
  let even = '';
  let odd = '';
  
  for (let i = 0; i< s.length; i++){
    if (i % 2 === 0){
      even += s.toUpperCase()[i];
      odd +=s[i];
    } else{
      even += s[i];
      odd +=s.toUpperCase()[i];
    }
  }
  return [even,odd];
};

function solution(str){
  var splitString = str.split("");
  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join("");
  return joinArray;
  
}

function removeChar(str){
return str.slice(1,-1)
  

};

function otherAngle(a, b) {
  return 180-(a+b);
  
}
*/