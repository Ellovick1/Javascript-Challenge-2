	function printUnique(array, num){
	
	for (let i=0; i<num; i++){
	
		var j;

		for (j=0; j<i; j++)

		if (array[i] == array[j])

			break;

		if (i == j)

		console.log(array[i] + " ");
	}
}

	array = new Array(1, 1, 2, 2, 3, 3, 4, 4, 5, 6);

	n = array.length;
	printUnique(array, n);
