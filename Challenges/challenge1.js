// 796. Rotate String
// Easy

// Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

// A shift on s consists of moving the leftmost character of s to the rightmost position.

// For example, if s = "abcde", then it will be "bcdea" after one shift.
 

// Example 1:

// Input: s = "abcde", goal = "cdeab"
// Output: true
// Example 2:

// Input: s = "abcde", goal = "abced"
// Output: false
 

// Constraints:

// 1 <= s.length, goal.length <= 100
// s and goal consist of lowercase English letters.

// let s = "abcde"
// let goal = "cdeab"



// var rotateString = function(s, goal) {
//     if (s === goal) return true //check to see if the "s" is already equal to the "goal" improves leet code runtime
//     let arr = s.split("") //convert chars in a string to an array
//     for (let i = 0; i < arr.length; i++){
//         let shiftedChar = arr.shift() //shift method removes first element on the array and returns the char which was removed
//         arr.push(shiftedChar) //push method appends the removed char to the end of the array
//         if (arr.join("") === goal) return true //join method converts the elements in an array to a string 
//     }
//     return false
// };


// var rotateString = function(s, goal) {
//     if (s.length !== goal.length) return false;
//     console.log(s.concat(s))
//     return s.concat(s).includes(goal);
// };


// var rotateString = function(s, goal) {
//     // s = s.split("")
//     for (let i = 0; i < s.length; i++){
//         console.log(s.slice(1))
//         // s = s.slice(1) + s[0];
//         // console.log(s)
//         if(s === goal) return true;
//     }
//     return false
// };

// console.log(rotateString(s,goal))


directions = ["n", "s", "e", "e"]

// const setDirection = new Set(directions) 
function loopOverArray(directions) {
    let data  = {}
    for (let direction of directions){
        let count = 1
        for (i=0;i<directions.length;i++){
            if (directions[i] === direction) count++;
        }
        data.direction = count
    }
    // console.log(count)
    return data
  }

console.log(loopOverArray(directions))
// console.log(setDirection)