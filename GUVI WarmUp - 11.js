/* Create a function that returns the number of frames shown in a given number of minutes for a certain FPS. */

function frames(num1, num2) {
	///Your code Starts here 
	
	let TotalNoOfFrame;
	let minutes = num1
	let FPS = num2 //frame per second
	let SecondsPerMinute = 60
	TotalNoOfFrame = minutes * FPS * SecondsPerMinute
	return TotalNoOfFrame
	
	
	
	///Your code Ends here
}
/*
Lines For TestCase

frames(1, 1);
frames(10, 1);
frames(10, 25); 
*/