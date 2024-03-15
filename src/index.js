const billInput = document.getElementById("billInput");
const peopleInput = document.getElementById("peopleInput");
const tipResult = document.getElementById("tipResult");
const totalResult = document.getElementById("totalResult");
const allInputs = document.querySelectorAll("input");
const btnWrap = document.getElementById("btnWrap");
const form = document.querySelector("form");
const resetBtn = document.getElementById("resetBtn");

const tipCalculate = (value) => {
	const percent = value.slice(0, -1) * 0.01;
	const people = peopleInput.value;

	//tipCalculate
	const tipForPerson = billInput.value * percent / people;
	//소수점 두자리까지
	const floatValue = parseFloat(tipForPerson);
	const fixedResult = floatValue.toFixed(2);
	
	//totalCaculate
	const totalForPerson = parseFloat(billInput.value / people) + parseFloat(fixedResult);

	//result notify
	tipResult.value = fixedResult;	
	totalResult.value = totalForPerson;

	//reset active
	resetBtn.classList.add("active");
}


const resetValues = () => {
	Array.from(allInputs).map(input => input.value = "");
	resetBtn.classList.remove("active");
}

const changeToValueBtn = (value) =>{
	console.log(value);
}

//submit 시 커스텀버튼으로 변경
const handleSubmit = (event) => {
	event.preventDefault();
	const customInput = document.getElementById("customInput");
	btnWrap.removeChild(form);
}


form.addEventListener('submit', handleSubmit);





//숫자만 입력가능하도록

// let storedValue = ""; // 저장된 값 초기화

// function validateNumber() {
// 	const inputField = document.getElementById('billInput');
// 	const inputValue = inputField.value;
// 	const regex = /^[0-9]*$/; // 숫자만 허용하는 정규식

// 	if (!regex.test(inputValue)) {
// 		inputField.value = inputValue.replace(/[^0-9]/g, ''); // 숫자 이외의 문자 제거
// 		alert('숫자만 입력 가능합니다.');
// 	}
// 	storedValue = inputField.value;
// }

// function outputValue() {
// 	document.getElementById('output').innerText = "저장된 값: " + storedValue;
// }