const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");

form.addEventListener("submit", (e) => {
	e.preventDefault();
	checkInput();
});

function checkInput() {
	//get value
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();

	if (usernameValue === "" || usernameValue === null) {
		//show error
		//class error
		setErrorFor(username, "user can not be blank");
	} else {
		// add succsess
		setSuccessFor(username);
	}
	/***********************************************************************/
	if (emailValue === "" || emailValue === null) {
		setErrorFor(email, "email can not be blank");
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, "Email is not valid");
	} else {
		setSuccessFor(email);
	}
	// **********************************************************************//
	if (passwordValue === "" || passwordValue === null) {
		setErrorFor(password, "Password cannot be blank");
	} else if (!ispassword(passwordValue)) {
		setErrorFor(password, "Minimum eight characters");
	} else {
		setSuccessFor(password);
	}
	// **********************************************************************//
	if (password2Value === "" || password2Value === null) {
		setErrorFor(password2, "Password two cannot be blank");
	} else if (passwordValue !== password2Value) {
		setErrorFor(password2, "Password does not match");
	} else {
		setSuccessFor(password2);
	}
}

function setErrorFor(input, massage) {
	const formControl = input.parentElement; // .form-Control
	const small = formControl.querySelector("small");
	small.innerText = massage;
	formControl.className = "form-control border-0 error";
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = "form-control border-0 success";
}
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
		email,
	);
}
function ispassword(password) {
	return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
}
