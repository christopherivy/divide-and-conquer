function findRotationCount (arr, low = 0, high = arr.length - 1) {
	if(high < low) return 0;
	if(high === low) return low;
	let mid = Math.floor((low + high) / 2);

	console.log(arr, "high:", high, "low:", low, "mid", mid);

	// Check if element (mid+1) is minimum element.
	// Consider the cases like [3, 4, 5, 1, 2]
	if(mid < high && arr[ mid + 1 ] < arr[ mid ]) {



		console.log(arr[ mid + 1 ] < arr[ mid ]);
		console.log("line 11:", "high:", high, "low:", low, "mid", mid);
		return mid + 1;
	}

	// Check if mid itself is minimum element
	if(mid > low && arr[ mid ] < arr[ mid - 1 ]) {
		console.log("line 18:", "high:", high, "low:", low, "mid", mid);
		return mid;
	}

	// Decide whether we need to go to left half or
	// right half
	if(arr[ high ] > arr[ mid ]) {
		console.log("line 25:", "high:", high, "low:", low, "mid", mid);
		return findRotationCount(arr, low, mid - 1);
	}
	return findRotationCount(arr, mid + 1, high);
}

// module.exports = findRotationCount;

// console.log(findRotationCount([ 15, 18, 2, 3, 6, 12 ])); // 2
console.log(findRotationCount([ 7, 9, 11, 12, 5 ])); // 4
// console.log(findRotationCount([ 7, 9, 11, 12, 15 ])); // 0
