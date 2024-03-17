document.addEventListener('DOMContentLoaded', function() {
    const billInput = document.getElementById('bill');
    const tipButtons = document.querySelectorAll('.tip-btn');
    const customTipInput = document.getElementById('percentage-input');
    const numberOfPeopleInput = document.getElementById('people-number-input');
    const tipAmountDisplay = document.getElementById('tip-amount');
    const totalAmountDisplay = document.getElementById('total-amount');
    const warning = document.querySelector('.warning');
    const resetButton = document.getElementById('reset-btn');
    let selectedTip = 0;

    // 팁 비율 버튼 클릭 이벤트 처리
    tipButtons.forEach(button => {
        button.addEventListener('click', function() {
            selectedTip = parseFloat(this.value); //값을 가져오는 parseFloat()함수 생성
            highlightSelectedButton(this);
            calculateTip();
        });
    });

    // 커스텀 팁 입력 처리
    customTipInput.addEventListener('input', function() {
        selectedTip = parseFloat(this.value) || 0;
        highlightSelectedButton(null);
        calculateTip();
    });

    // 인원 수 입력 처리 및 경고 메시지 표시
    numberOfPeopleInput.addEventListener('input', function() {
        showWarning();
        calculateTip();
    });

    // RESET 버튼 클릭 이벤트 처리
    resetButton.addEventListener('click', function() {
        resetCalculator();
    });

    //사용자 정의 함수
    // 팁 계산 함수
    function calculateTip() {
        const bill = parseFloat(billInput.value) || 0;
        const peopleCount = parseInt(numberOfPeopleInput.value) || 0;

        if(bill > 0 && peopleCount > 0) {
            const tipAmountPerPerson = (bill * selectedTip / 100) / peopleCount;
            const totalAmountPerPerson = bill / peopleCount + tipAmountPerPerson;

            tipAmountDisplay.textContent = `$${tipAmountPerPerson.toFixed(2)}`;
            totalAmountDisplay.textContent = `$${totalAmountPerPerson.toFixed(2)}`;
        } else {
            tipAmountDisplay.textContent = '$0.00';
            totalAmountDisplay.textContent = '$0.00';
        }
    }

   function highlightSelectedButton(selectedButton) {
    tipButtons.forEach(button => {
        if(button === selectedButton) {
            button.classList.add('selected-percentage');
            button.style.backgroundColor = "var(--strong-cyan)"; 
            button.style.color = "var(--very-dark-cyan)"; 
        } else {
            button.classList.remove('selected-percentage');
            button.style.backgroundColor = ""; // 기본 배경색으로 재설정
            button.style.color = "white"; // 기본 글자색으로 재설정 (옵션)
        }
    });

    if(selectedButton) {
        customTipInput.value = '';
    }
}
    //numberOfPeopleInput 이 0이거나   peopleCount <= 0 일때 경고 알림 함수
    function showWarning() {
        const peopleCount = parseInt(numberOfPeopleInput.value) || 0;
        warning.style.display = peopleCount <= 0 ? 'block' : 'none';
    }

    //계산기 초기화 함수
    function resetCalculator() {
    billInput.value = '';
    numberOfPeopleInput.value = '';
    customTipInput.value = '';
    tipButtons.forEach(button => {
        button.classList.remove('selected-percentage'); // 선택 스타일 클래스 제거
        // 추가적으로 버튼 스타일을 초기 상태로 되돌립니다. 예를 들어:
        button.style.backgroundColor = ""; // 배경색 초기화 (필요한 경우)
        button.style.color = "white"; // 글자색 초기화 (필요한 경우)
    });
    tipAmountDisplay.textContent = '$0.00';
    totalAmountDisplay.textContent = '$0.00';
    warning.style.display = 'none';
    selectedTip = 0;
}

});
