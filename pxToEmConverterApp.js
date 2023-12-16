const resultDiv = document.querySelector('.result');
const result = document.querySelector('.result p');
const defaultInput =  document.querySelector('#default');
const copyBtn = document.querySelector('.copy_btn');
const submitBtn = document.querySelector('input[type="submit"]');
const userInput = document.querySelector('#user_input');
const select = document.querySelector('select');
function main() {
	const defaultFontSize = Number(defaultInput.value);
	const userFont = Number(userInput.value);
	let unit;
	condition(defaultFontSize, userFont, unit);
}
function condition(defaultFontSize, userFont, unit) {
	if(defaultFontSize <= 0) {
		alert('Enter any integer number for default font size');
		defaultInput.focus();
		defaultInput.classList.add('error');
		select.classList.remove('error');
		userInput.classList.remove('error');
		resultDiv.classList.remove('active')
	} else {
		if(userFont <= 0 || userFont == undefined) {
			alert('Enter any integer number for user font size');
			userInput.focus();
			userInput.classList.add('error');
			select.classList.remove('error');
			resultDiv.classList.remove('active')
		} else if (select.value == 'Select_Unit') {
			alert('Choose any options');
			select.focus();
			resultDiv.classList.remove('active')
			select.classList.add('error');
			userInput.classList.remove('error');
		} else if (select.value == 'em_to_px') {
			unit = defaultFontSize * userFont;
			result.innerHTML = unit +'px'
			resultDiv.classList.add('active')
			select.classList.remove('error');
		} else {
			unit = userFont / defaultFontSize;
			result.innerHTML = unit +'em'
			resultDiv.classList.add('active')
			userInput.classList.remove('error');
			select.classList.remove('error');
		}
		defaultInput.classList.remove('error');
	}
}
submitBtn.addEventListener('click', main);
copyBtn.addEventListener('click', ()=> {
	navigator.clipboard.writeText(result.innerHTML);
	alert("You've successfully copied to clipboard")
})
