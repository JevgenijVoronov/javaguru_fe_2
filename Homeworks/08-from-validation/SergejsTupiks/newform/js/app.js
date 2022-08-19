// show a message with a type of the input
function showMessage(input, message, type) {
	// get the small element and set the message
	const msg = input.parentNode.querySelector("small");
	msg.innerText = message;
	// update the class for the input
	input.className = type ? "success" : "error";
	return type;
}

function showError(input, message) {
	return showMessage(input, message, false);
}

function showSuccess(input) {
	return showMessage(input, "", true);
}

function hasValueTextField(input, message) {
	if (input.value.trim() === "") {
		return showError(input, message);
	}
	return showSuccess(input);
}

function hasValue(input, message) {
	if (input.value.trim() === "") {
		return showError(input, message);
	}
	return showSuccess(input);
}

function validateEmail(input, requiredMsg, invalidMsg) {
	// check if the value is not empty
	if (!hasValue(input, requiredMsg)) {
		return false;
	}
	// validate email format
	const emailRegex =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	const email = input.value.trim();
	if (!emailRegex.test(email)) {
		return showError(input, invalidMsg);
	}
	return true;
}

function checkZIP() {
    // добавить ещё 3 страны
    var constraints = {
      lv : [ '^(LV-)?\\d{4}$', '4 digits or LV-"4 digits": e.g. LV-3001 or 3007' ],
	  lt : [ '^(LT-)?\\d{5}$', '5 digits or LV-"5 digits": e.g. LT-30001 or 30007' ],
	  ee : [ 'd{5}$', "5 digits" ],
	  fi : [ 'd{5}$', "The current postal codes (postinumero) in Finland range from 00100 – 99990" ],
    };

	let country = document.getElementById("country").value;
	let zipCode = document.getElementById("zip").value;
	let constraint = new RegExp(constraints[country][0], '');
	
	if (constraint.test(zipCode)) {
		document.getElementById('zip').setCustomValidity("");
		document.getElementById('zip').classList.remove('error');
		document.getElementById('zip').classList.add('success');

	} else {
		document.getElementById('zip').setCustomValidity(constraints[country][1]);
		document.getElementById('zip').classList.remove('success');
		document.getElementById('zip').classList.add('error');
	}
}

const form = document.querySelector("#form");

const TEXT_FIELD_REQUIRED = "Please enter free text";
const NAME_REQUIRED = "Please enter free text 5-10 characters";
const PASS1_REQUIRED = "contains one capital char, one letter char and one number";
const PASS2_REQUIRED = "contains 8 characters - one capital char, one letter char and one number";
const EMAIL_REQUIRED = "Please enter your email";
const EMAIL_INVALID = "Please enter a correct email address format - *@gmail.com";
const WEEK_REQUIRED = "Week's number in May-June";
const TIME_REQUIRED = "Hours are from 9am to 6pm";
const ZIP_REQUIRED = "Postal Code for selected country";

form.addEventListener("submit", function (event) {

	event.preventDefault();

	// validate the form
    let text_fieldValid = hasValue(form.elements["text_field"], TEXT_FIELD_REQUIRED);
	let mmnameValid = hasValueTextField(form.elements["minmaxtext"], NAME_REQUIRED);
	let pass1Valid = hasValue(form.elements["passwd1"], PASS1_REQUIRED);
	let pass2Valid = hasValue(form.elements["passwd2"], PASS2_REQUIRED);
	let emailValid = validateEmail(form.elements["email"], EMAIL_REQUIRED, EMAIL_INVALID);
	let weekValid = hasValue(form.elements["week"], WEEK_REQUIRED);
	let timeValid = hasValue(form.elements["time"], WEEK_REQUIRED);
	let zipValid = hasValue(form.elements["zip"], ZIP_REQUIRED);

	 if (mmnameValid && emailValid && text_fieldValid && pass1Valid&& pass2Valid && weekValid && timeValid && zipValid) {
	 	alert("OK.");
	 }
})

window.onload = function () {
	document.getElementById("country").onchange = checkZIP;
	document.getElementById("zip").oninput = checkZIP;
}