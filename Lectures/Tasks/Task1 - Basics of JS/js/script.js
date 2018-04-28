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
	arr = str.match(/\w+[-|,|.]?\w+/g);
	var length = arr.length;

	for(var i = 0; i < arr.length; i++){
		arr[i] = arr[i].length;
	}

	max = getMaxWord(arr);
	min = getMinWord(arr);
	average = getAverageWord(arr);

	numberOfWords.querySelector('span').innerHTML = arr.length;
	maxLength.querySelector('span').innerHTML = min;
	minLength.querySelector('span').innerHTML = max;
	averageLength.querySelector('span').innerHTML = average;
}, false);

function getAverageWord(arr){
	var sum = arr.reduce(function(a,b){
		return a + b;
	});

	return Math.round(sum/arr.length);
}

function getMinWord(arr){
	var min = arr.reduce(function(a,b){
		return Math.min(a,b);
	});

	return min;
}

function getMaxWord(arr){
	var max = arr.reduce(function(a,b){
		return Math.max(a,b);
	});

	return max;
}