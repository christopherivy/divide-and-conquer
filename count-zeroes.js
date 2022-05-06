

// function countZeroes (arr) {
// 	let count = 0;

// 	for(let i = 0; i < arr.length; i++) {
// 		if(arr[ i ] === 0) {
// 			count += 1;
// 		}
// 	}
// 	return count;

// }


function countZeroes (arr) {
	// add whatever parameters you deem necessary - good luck!
	let firstZero = findFirst(arr);
	if(firstZero === -1) return 0;

	return arr.length - firstZero;
}

function findFirst (arr, low = 0, high = arr.length - 1) {

	//low = beginning index that we are looking at
	//high = end index 


	if(high >= low) {
		//find the middle of the window
		let midIdx = low + Math.floor((high - low) / 2);
		console.log("Line 33", "Low:", low, "MidIdx:", midIdx, "High:", high);

		if((midIdx === 0 || arr[ midIdx - 1 ] === 1) && arr[ midIdx ] === 0) {
			return midIdx;
		} else if(arr[ midIdx ] === 1) {
			return findFirst(arr, midIdx + 1, high);
		}
		return findFirst(arr, low, midIdx - 1);
	}
	return -1;
}


console.log("Result:", countZeroes([ 1, 1, 0, 1, 0, 0 ])); // 2
// console.log(countZeroes([ 1, 0, 0, 0, 0 ])); // 4
// console.log(countZeroes([ 0, 0, 0 ])); // 3
// console.log(countZeroes([ 1, 1, 1, 1 ])); // 0


// module.exports = countZeroes