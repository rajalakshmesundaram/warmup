/* Given an object and a key, "addProperty" adds a new property on the given object with a value of true. */

var obj = {}

function addProperty(obj, key) {
	///Your code Starts here 
	obj[key] = true;
	return obj[key]
	///Your code Ends here
}
addProperty(obj, "mykey");
/*
Lines For TestCase
obj.mykey
*/