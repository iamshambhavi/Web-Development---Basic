function printReverse(arr){
	for (var i =arr.length - 1; i >= 0; i--) {
	console.log(arr[i]);
	}
}
function isUniform(arr){
	let element=arr[0];
	for (var i = 1; i < arr.length; i++) {
		if(arr[i]!==element)
			return false;
	}
	return true;
}
function sumArray(arr){
	let sum=0;
	for (var i = 0; i < arr.length; i++) {
		sum+=arr[i];
	}
	return sum;
}
function sumArray(arr){
	let sum=0;
	arr.forEach(function(element){
		sum+=element;
	})
	return sum;
}
function max(arr){
	let maxi=arr[0];
	for (var i = 1; i < arr.length; i++) {
		if(maxi<arr[i])
			maxi=arr[i];
	}
	return maxi;
}
function max(arr){
	let maxi=0;
	arr.forEach(function(element){
		if(maxi<element)
			maxi=element;
	})
	return maxi;
}
