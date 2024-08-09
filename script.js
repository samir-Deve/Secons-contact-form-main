const form = document.getElementsByTagName("form").item(0);
const submitBtn = form.querySelector(".submit_btn button");

const nameError = form.querySelector(".first_error_msg");
const nameInput = form.querySelector(".Fname_Lname_cont #first_name");

const lastNameError = form.querySelector(".last_error_msg");
const lastNameInput = form.querySelector(".Fname_Lname_cont #last_name");

const emailErrorMsg = form.querySelector(".email_address .email_error_msg");
const emailInput = form.querySelector(".email_address #email");

const queryTypeError = form.querySelector(".query_type .query_type_error_msg");


const areaErrorMsg = form.querySelector(".request_msg_cont .message_error_msg");
const textArea = form.querySelector(".request_msg_cont #text_area");

const consentErrorMsg = form.querySelector(".consent_cont .consent_error_msg");



function getFormValues (e) {
	e.preventDefault()
	const formValues = new FormData(form);
	const formDataEntries = Object.fromEntries(formValues)
	const {checkbox, email, enquiry, firstName, lastName, text_area} = formDataEntries;
	

	console.log(firstName, lastName);
	FNameValidate(firstName);
	nameInput.addEventListener("blur",() => {
		FNameValidate(e)
	})
	LNameValidate(lastName);
	textAreaValidate(text_area);
	validatEmail (email);
	checkBoxValidate(checkbox);
	radioValidate(enquiry);
}

function FNameValidate(FName) {
	const isNameValid = /^[A-Za-z]{4,19}$/g;
	if(!FName) {
		nameError.innerHTML = `Please enter your name !`
		nameInput.style.borderColor = "red"
	}
	else if(!isNameValid.test(FName)) {
		nameError.innerHTML = `Please enter a valid name!`
	}
	else {
		nameInput.style.borderColor = "green";
		nameError.innerHTML = ``
	}
}

function LNameValidate(LName) {
	const isNameValid = /^[A-Za-z]{4,19}$/g;
	if(!LName) {
		lastNameError.innerHTML = `please enter your last name !`;
		lastNameInput.style.borderColor = `red`
	}
	else if(!isNameValid.test(LName)) {
		lastNameError.innerHTML = `${LName} is not a valid last name !`;
		lastNameInput.style.borderColor = `red`
	}
	else {
		lastNameInput.style.borderColor = "green";
		lastNameError.innerHTML = ``;
	}
}

function textAreaValidate(msg) {
	const isTextVlid = /^.{6,}$/g
	if(!msg) {
		areaErrorMsg.innerHTML = `This field is required`;
		textArea.style.borderColor = "red";
	}
	else if(!isTextVlid.test(msg)) {
		areaErrorMsg.innerHTML = `${msg} is not a valid message`;
		textArea.style.borderColor = "red";
	}
	else {
		textArea.style.borderColor = "green";
		areaErrorMsg.innerHTML = ``;
	}
}

function validatEmail (email) {
	const isValidEmail = /^[\w.-]+@[\w.-]+\.\w{2,}$/g;
	if(!email) {
		emailErrorMsg.innerHTML = `Please enter your email address !`;
		emailInput.style.borderColor = "red"
	}
	else if(!isValidEmail.test(email)) {
		emailErrorMsg.innerHTML = `${email} is not a valid email address !`;
		emailInput.style.borderColor = "red"
	}
	else {
		emailInput.style.borderColor = "green";
		emailErrorMsg.innerHTML = ``;
	}
}

function checkBoxValidate(checkBox) {
	if(!checkBox) {
		consentErrorMsg.innerHTML = `To submit this form please consent to being contacted !`
	}
	else if(checkBox) {
				consentErrorMsg.innerHTML = ``
	}
}

function radioValidate(radioValue) {
	if(!radioValue) {
		queryTypeError.innerHTML = `Please select a query type !`
	}
	else if(radioValue) {
		queryTypeError.innerHTML = ``
	}
}

submitBtn.addEventListener("click", (e) => {
	getFormValues(e)
})
