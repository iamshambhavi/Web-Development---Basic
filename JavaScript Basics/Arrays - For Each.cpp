let nums=[1,2,3,4,5,6,"a","b"];
for (var i = 0; i < nums.length; i++) {
	console.log(nums[i]);
}
//arr.forEach(somefunction);
nums.forEach(function(){
	console.log("Iamgood");
})
//prints Iamgood 8 times
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

Array.prototype.myForEach=function(func){
	for (var i = 0; i < this.length; i++) {
		func(this[i]);
	}
}
nums.myForEach(alert);
nums.myForEach(function(element){
	console.log(element);
})
