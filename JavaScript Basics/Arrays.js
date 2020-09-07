var friends= new Array();
var friends= [];

var randomCollection=[3,"3","Hello"];

randomCollection.length;

/*FOR WORKING WOTH LAST*/
friends.push("Manpreet");
friends.push("Sushi");
friends.push("Arjun");

friends.pop();
//gives arjun back


/*FOR WORKING WOTH FRONT*/
friends.unshift("Arjun")
//adds arjun to the front

let name=friends.shift();
//removes and returns arjun ie the first element of array

friends.indexOf("Manpreet"); 
friends.indexOf("Someone") //gives -1;

let nums=[1,2,3,4,5,6,"a","b"];
let arr=nums.slice(1,3); //[2,3];
let x=nums.slice(2,5); //[3,4,5];
let letters=slice(6);
let whole=nums.slice();

let index=nums.indexOf(5);
nums.splice(index,1);
//splice(index jaha se start krna h delete krna, jitne elements delete krne h)
for (var i = 0; i < nums.length; i++) {
	console.log(nums[i]);
}
//arr.forEach(somefunction);
nums.forEach(function(){
	console.log("Iamgood");
})
//prints Iamgood 7 times
nums.forEach(function(element){
	console.log(element);
})
//prints the whole array elements;
function elements(color){
	console.log(color);
}
nums.forEach(elements);
//prints the whole array elements;
nums.forEach(function(element,i,nums){
	console.log(element+" "+i+" "+nums);
})
//first arguement points to elemnt 2nd to index and third to complete array

function logArrayElements(element, index, array) {
  console.log('a[' + index + '] = ' + element)
}
[2, 5, , 9].forEach(logArrayElements)
// logs:
// a[0] = 2
// a[1] = 5
// a[3] = 9
