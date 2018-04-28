var text = document.getElementsByTagName('textarea')[0],
	btn = document.getElementById('btn'),
	numberOfWords = document.getElementsByClassName('numberOfWords')[0],
	maxLength = document.getElementsByClassName('lengthOfMaxWord')[0],
	minLength = document.getElementsByClassName('lengthOfMinWord')[0],
	averageLength = document.getElementsByClassName('averageLenghtOfWord')[0], 
	str,
	arr,
	max,
	min,
	average;

btn.addEventListener('click', function(){
	str = text.value;
	arr = str.match(/\w+[-|,|.]?\w+/g); //match all words in array and check out if chars ('-',',','.') exist between words
	var length = arr.length;

	for(var i = 0; i < arr.length; i++){
		arr[i] = arr[i].length; //replace all words in array to length of that words
	}

	max = getMaxWord(arr); //get length of the maximal word in the textarea
	min = getMinWord(arr); //get length of the minamal word in the textarea
	average = getAverageWord(arr); //get average length of words in the textarea

	// show results on the page
	numberOfWords.querySelector('span').innerHTML = "<" + arr.length + ">";
	maxLength.querySelector('span').innerHTML = "<" + min + ">";
	minLength.querySelector('span').innerHTML = "<" + max + ">";
	averageLength.querySelector('span').innerHTML = "<" + average + ">";
}, false);

/*
* argument arr: array with a length of the words as elements 
* return average length of words
*/
function getAverageWord(arr){
	var sum = arr.reduce(function(a,b){
		return a + b;
	});

	return Math.round(sum/arr.length);
}

/*
* argument arr: array with a length of the words as elements 
* return length of the minimum word
*/
function getMinWord(arr){
	var min = arr.reduce(function(a,b){
		return Math.min(a,b);
	});

	return min;
}

/*
* argument arr: array with a length of the words as elements 
* return length of the maximal word
*/
function getMaxWord(arr){
	var max = arr.reduce(function(a,b){
		return Math.max(a,b);
	});

	return max;
}