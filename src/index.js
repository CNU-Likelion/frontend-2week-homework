const bill = document.getElementById("bill"); //입력한 돈
const numberOfPeople = document.getElementById("people"); //사람 수
const customTip= document.getElementById("custom"); //팁 비율 직접 입력
const amountTip= document.getElementById("amount--tip"); //계산된 총 팁
const amountTotal= document.getElementById("amount--total"); //총 비용
const resetBtn= document.getElementById("reset--button"); //초기화 버튼
const buttons= document.querySelectorAll(".tip-button button"); //팁 선택 버튼들

//팁 버튼을 누를때 
buttons.forEach((button)=>
{
    //버튼이 클릭되면 실행될 콜백 함수 정의
    button.addEventListener("click",(e)=>
    {
        //팁 %는 버튼에 적힌 숫자로 가져옴
        let tipValue = e.target.innerText;
        tipValue = tipValue.substr(0,tipValue.length-1);

        if(bill.value === "") //입력한 돈이 없으면 리턴
        {
            return;
        }

        if(numberOfPeople.value === "") //사람수를 입력하지 않으면 1로 진행
        {
            numberOfPeople.value = 1;
        }

        //팁 비용을 계산하는 함수의 인자 전달
        calculateTip(
            parseFloat(bill.value),
            parseInt(tipValue),
            parseInt(numberOfPeople.value)
        );
    })
})

//팁 %를 직접 입력할때
customTip.addEventListener("blur",(e)=>
{
    if(bill.value === "")
        {
            resetEveryThing();
            return;
        }

     if(numberOfPeople.value === "") //사람수를 입력하지 않으면 1로 진행
        {
            numberOfPeople.value = 1;
        }

        //팁 비용을 계산하는 함수의 인자
        calculateTip(
            parseFloat(bill.value),
            parseInt(e.target.value),
            parseInt(numberOfPeople.value)
        );
})

//팁 비용 계산 함수 정의
function calculateTip(bill,percentage,numberOfPeople)
{
    let tipAmount = (bill * (percentage / 100)) / numberOfPeople;
    let tip = Math.floor(tipAmount*100)/100;
    tip = tip.toFixed(2);

    let totalAmount = (tipAmount * numberOfPeople + bill) / numberOfPeople;
    totalAmount = totalAmount.toFixed(2);

    amountTip.innerHTML = `$${tip}`;
    amountTotal.innerHTML =`$${totalAmount}`;
}

resetBtn.addEventListener("click",resetEveryThing);

function resetEveryThing()
{
    amountTip.innerHTML = "$0.00";
    amountTotal.innerHTML = "$0.00";

    bill.value = "";
    numberOfPeople.value = "";
    customTip.value = "";
}