function getSum(x) {
    return(x * 2);
}
console.log(getSum(2));   

function evenNumber(x) {
        if (x % 2 === 0) {
            return true;
        }else{
            return false;
        }
    
    
}
console.log(evenNumber(24));
console.log(evenNumber(13));
console.log(evenNumber(16));
console.log(evenNumber(33));

const array = [1, 2, 3, 44, 5, 103, 6, 72, 8, 96]
function maxNumber(array) {
    let maxNumber = array[0]
    for (let i = 0; i < array.length; i++) {
        if (array[i]> maxNumber) {
            maxNumber = array[i]
        }
    } 
    return maxNumber;    
}
console.log(maxNumber(array));

function isPalindrome(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() !== str[str.length - i - 1].toLowerCase()) {
      return false;
    }
  }
  return true;
}
console.log(isPalindrome('level'));
console.log(isPalindrome('hello'));
console.log(isPalindrome('radar'));
console.log(isPalindrome('one'));

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
function getAverage(numbers) {
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]
    }
    return sum / numbers.length
}
console.log('Среднее:', getAverage(numbers));