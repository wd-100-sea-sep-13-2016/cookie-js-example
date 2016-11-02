// hold a reference to the cookies div to manipulate later
var $cookies = $('#cookies');

// get all the cookies as an object
var cookies = Cookies.get();

// get all the cookie keys as an array
var cookieKeys = Object.keys(cookies);

// display cookies
if (cookieKeys.length === 0) {
	// a simple message when there are no cookies
	$cookies.html("You don't have any cookies!");
} else {
	// create a list and wrap it in jQuery
	var $cookieList = $(document.createElement("ul"));

	// append an element for every cookie
	for (var i = 0; i < cookieKeys.length; i++) {
		// get the cookie key and value
		var key = cookieKeys[i];
		var value = Cookies.get(key);

		// create an element
		var $cookieListItem = $(document.createElement("li"));
		$cookieListItem.html(key + ": " + value);

		// append it to the list
		$cookieList.append($cookieListItem);
	}

	// append the cookie list
	$cookies.append($cookieList);
}




// set up a click handler that will take the key and value input
// element values, save them in a cookie, then refresh the page
$('#save').click(function() {
	var key = $('#key').val();
	var value = $('#value').val();

	// check if there was a previous value
	var previousValue = Cookies.get(key);

	if (previousValue) {
		alert('Overwriting previous cookie value of \"' + previousValue + "\"!");
	}

	// save the new value
	Cookies.set(key, value);

	// refresh the page
	window.location.reload();
});




// any existing cookies should have been added to the DOM in a list item
// by this point...
// add a click handler that will delete the cookie
$('li').click(function() {
	// the inner HTML should look like "key: value"
	var innerHTML = $(this).html();

	// this will split the inner HTML into an array
	// [0]: "key"
	// [1]: " value"
	var tokens = innerHTML.split(':');

	// get the key
	var key = tokens[0];

	// delete the cookie
	Cookies.remove(key);

	// refresh the page
	window.location.reload();
});
