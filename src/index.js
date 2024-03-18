// 전역 변수 선언
let bill;
let peopleNum;
let roundedTip;
let roundedTotal;

// 입력 필드에서 포커스를 잃을 때 값을 전역 변수에 할당하는 함수
function assignValues() {
    bill = parseFloat(document.getElementById("Bill").value);
    peopleNum = parseFloat(document.getElementById("peopleNum").value);
}

 // 이벤트 리스너 등록
document.getElementById("Bill").addEventListener("blur", assignValues);
document.getElementById("peopleNum").addEventListener("blur", assignValues);

// 계산 버튼 클릭 시 이벤트 핸들러 함수
const fiveBtn = document.getElementById("fiveBtn");
document.getElementById("fiveBtn").addEventListener("click", function(event) {
    const tip = bill * 0.05 / peopleNum;
    const total = bill / peopleNum + tip;
    roundedTip = tip.toFixed(2);
    roundedTotal = total.toFixed(2);
    document.getElementById("tip").textContent = `$${roundedTip}`;
    document.getElementById("total").textContent = `$${roundedTotal}`;
    fiveBtn.style.backgroundColor = "hsl(172, 67%, 45%)";
    tenBtn.style.backgroundColor = "hsl(183, 100%, 15%)";
    tenfiveBtn.style.backgroundColor = "hsl(183, 100%, 15%)";
    twentyfiveBtn.style.backgroundColor = "hsl(183, 100%, 15%)";
    fiftyBtn.style.backgroundColor = "hsl(183, 100%, 15%)";
});

const tenBtn = document.getElementById("tenBtn");
document.getElementById("tenBtn").addEventListener("click", function() {
    const tip = bill * 0.1 / peopleNum;
    const total = bill / peopleNum + tip;
    roundedTip = tip.toFixed(2);
    roundedTotal = total.toFixed(2);
    document.getElementById("tip").textContent = `$${roundedTip}`;
    document.getElementById("total").textContent = `$${roundedTotal}`;
    fiveBtn.style.backgroundColor = "hsl(183, 100%, 15%)";
    tenBtn.style.backgroundColor = "hsl(172, 67%, 45%)";
    tenfiveBtn.style.backgroundColor = "hsl(183, 100%, 15%)";
    twentyfiveBtn.style.backgroundColor = "hsl(183, 100%, 15%)";
    fiftyBtn.style.backgroundColor = "hsl(183, 100%, 15%)";
});

const tenfiveBtn = document.getElementById("tenfiveBtn");
document.getElementById("tenfiveBtn").addEventListener("click", function() {
    const tip = bill * 0.15 / peopleNum;
    const total = bill / peopleNum + tip;
    roundedTip = tip.toFixed(2);
    roundedTotal = total.toFixed(2);
    document.getElementById("tip").textContent = `$${roundedTip}`;
    document.getElementById("total").textContent = `$${roundedTotal}`;
    fiveBtn.style.backgroundColor = "hsl(183, 100%, 15%)";
    tenBtn.style.backgroundColor = "hsl(183, 100%, 15%)";
    tenfiveBtn.style.backgroundColor = "hsl(172, 67%, 45%)";
    twentyfiveBtn.style.backgroundColor = "hsl(183, 100%, 15%)";
    fiftyBtn.style.backgroundColor = "hsl(183, 100%, 15%)";
});

const twentyfiveBtn = document.getElementById("twentyfiveBtn");
document.getElementById("twentyfiveBtn").addEventListener("click", function() {
    const tip = bill * 0.25 / peopleNum;
    const total = bill / peopleNum + tip;
    roundedTip = tip.toFixed(2);
    roundedTotal = total.toFixed(2);
    document.getElementById("tip").textContent = `$${roundedTip}`;
    document.getElementById("total").textContent = `$${roundedTotal}`;
    fiveBtn.style.backgroundColor = "hsl(183, 100%, 15%)";
    tenBtn.style.backgroundColor = "hsl(183, 100%, 15%)";
    tenfiveBtn.style.backgroundColor = "hsl(183, 100%, 15%)";
    twentyfiveBtn.style.backgroundColor = "hsl(172, 67%, 45%)";
    fiftyBtn.style.backgroundColor = "hsl(183, 100%, 15%)";
});

const fiftyBtn = document.getElementById("fiftyBtn");
document.getElementById("fiftyBtn").addEventListener("click", function() {
    const tip = bill * 0.5 / peopleNum;
    const total = bill / peopleNum + tip;
    roundedTip = tip.toFixed(2);
    roundedTotal = total.toFixed(2);
    document.getElementById("tip").textContent = `$${roundedTip}`;
    document.getElementById("total").textContent = `$${roundedTotal}`;
    fiveBtn.style.backgroundColor = "hsl(183, 100%, 15%)";
    tenBtn.style.backgroundColor = "hsl(183, 100%, 15%)";
    tenfiveBtn.style.backgroundColor = "hsl(183, 100%, 15%)";
    twentyfiveBtn.style.backgroundColor = "hsl(183, 100%, 15%)";
    fiftyBtn.style.backgroundColor = "hsl(172, 67%, 45%)";
});

//입력할 때마다 값이 바뀌게 하고 싶음
const UserInput = document.getElementById("UserInput");
UserInput.addEventListener("input", calculate);

function calculate() {
    const UserInputValue = parseFloat(document.getElementById("peopleNum").value);
    const bill = parseFloat(document.getElementById("Bill").value);
    const peopleNum = parseFloat(document.getElementById("peopleNum").value);
    const tip = bill * UserInputValue / peopleNum / 100;
    const total = bill / peopleNum + tip;
    roundedTip = tip.toFixed(2);
    roundedTotal = total.toFixed(2);
    document.getElementById("tip").textContent = `$${roundedTip}`;
    document.getElementById("total").textContent = `$${roundedTotal}`;
}

//초기화 버튼
document.getElementById("reset").addEventListener("click", function() {
    document.getElementById("tip").textContent = "$0.00";
    document.getElementById("total").textContent = "$0.00";
    document.getElementById("UserInput").value = "";
    document.getElementById("Bill").value = "";
    document.getElementById("peopleNum").value = "";
    fiveBtn.style.backgroundColor = "hsl(183, 100%, 15%)";
    tenBtn.style.backgroundColor = "hsl(183, 100%, 15%)";
    tenfiveBtn.style.backgroundColor = "hsl(183, 100%, 15%)";
    twentyfiveBtn.style.backgroundColor = "hsl(183, 100%, 15%)";
    fiftyBtn.style.backgroundColor = "hsl(183, 100%, 15%)";
})



