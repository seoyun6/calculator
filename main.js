const $numberButtons = document.querySelectorAll('[data-number]');
const $operationButtons = document.querySelectorAll('[data-operation]');
const $allClearButton = document.querySelector('[data-all-clear]');
const $deleteButton = document.querySelector('[data-delete]');
const $equalsButton = document.querySelector('[data-equals]');
const $previousDispaly = document.querySelector('[data-previous-operand]');
const $currentDisplay = document.querySelector('[data-current-operand]');

let currentNumberStr = '';
let previousNumberStr ='';
let operation = null;

function getDisplayNumber(numberStr) {
	let floatNumber = parseFloat(numberStr);
	let displayNumber = floatNumber.toLocaleString('en', {
	maximumSignificantDigits: 10, 
	});
	return displayNumber;
}

function updateDisplay() {

    $currentDisplay.textContent = getDisplayNumber(currentNumberStr);
		if(operation) {
			$previousDisplay.textContent =
      getDisplayNumber(previousNumberStr) + ' ' + operation;
		} else {
			$previousDisplay.textContent = '';
		}

		$previousDispaly.textContent = getDisplayNumber(previousNumberStr);
}

$numberButtons.forEach((button) => {
	button.addEventListener('click', function (e) {
		let numberStr = e.target.textContent;
		if(numberStr === '.' && currentNumberStr.includes('.')) {
				return;
		}
		currentNumberStr = currentNumberStr + numberStr;

		//표시하기
		updateDisplay();
	});
});

$operationButtons.forEach((button) => {
	previousNumberStr = currentNumberStr
	//표시하기
	updateDisplay();
});

$allClearButton.addEventListener('click', function() {
	alert('equals');
});

$deleteButton.addEventListener('click', function() {
	alert('equals!');
});

$equalsButton.addEventListener('click', function() {
    alert('equals!!!');
});