<!DOCTYPE html>
<html>
<head>
<title>String Test</title>
</head>

<body>
<script>

var month = prompt("Enter a Month");
var charsInMonth = month.length;

if (charsInMonth > 3) {
	monthAbbrev = month.slice(0, 3);
	alert(monthAbbrev);
}

var cityToCheck = prompt("Enter a city");
var firstChar = cityToCheck.slice(0, 1);
var otherChar = cityToCheck.slice(1);
firstChar = firstChar.toUpperCase();
otherChar = otherChar.toLowerCase();
var cappedChar = firstChar + otherChar;
alert(cappedChar);

var str = prompt("Enter some text");
var numChar = str.length;
for (var i = 0; i < numChar; i++) {
	if (str.slice(i, i + 2) === " ") {
		alert("No double spaces!");
		break;
	}
}

var str = prompt("Enter some text");
var numChar = str.length;
for (var i = 0; i < numChar; i++) {
	if (str.charAt(i) === " ") {
		alert("double spaces!");
		break;
	}
}
</script>

</body>
</html>