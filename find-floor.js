
function findFloor (arr, num, low = 0, high = arr.length - 1) {

	if(low > high) return -1;
	// console.log("num:", num, "arr[ high]:", arr[ high ]);
	if(num >= arr[ high ]) return arr[ high ];

	let mid = Math.floor((low + high) / 2);
	// console.log("mid:", mid);
	// console.log("arr.mid:", arr[ mid ]);
	// console.log("arr[ mid - 1 ]:", arr[ mid - 1 ]);

	if(mid > 0 && arr[ mid - 1 ] <= num && num < arr[ mid ]) {
		return arr[ mid - 1 ];
	}
	if(num < arr[ mid ]) {
		return findFloor(arr, num, low, mid - 1);
	}
	return findFloor(arr, num, mid + 1, high);

}

// module.exports = findFloor;


console.log(findFloor([ 1, 2, 8, 10, 10, 12, 19 ], 9)); // 8
console.log(findFloor([ 1, 2, 8, 10, 10, 12, 19 ], 20)); // 19
console.log(findFloor([ 1, 2, 8, 10, 10, 12, 19 ], 0)); // -1
