function convert() {
	var inDate = document.getElementById('inputDate').value;
	var outDate = document.getElementById('displayDate');

	var mSeconds = parseInt(inDate)
	var date = new Date(mSeconds);
	outDate.innerHTML = date.toString();
	}