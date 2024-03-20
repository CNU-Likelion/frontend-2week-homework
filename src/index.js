let bill = document.querySelector(".item1__bill");
let total = document.querySelector(".total__output");
let tips = document.querySelectorAll(".tip__bar");
let tip_custom = document.querySelector(".tip__bar__custom");
let people = document.querySelector(".item1__people");
let tip_amount = document.querySelector(".tip__output");
let reset_button = document.querySelector(".container__item2__reset");

function event1(){
    total.innerText = bill.value;
}


tips.forEach(tips =>{
    tips.addEventListener('click',function(){
        if(this.textContent === "5%"){
            total.innerText = Math.round((Number(bill.value) + Number(bill.value)*0.05)*100)/100;
            tip_amount.innerText = Math.round((Number(bill.value)*0.05)*100)/100;
        }
        else if(this.textContent ==="10%"){
            total.innerText = Math.round((Number(bill.value) + Number(bill.value)*0.1)*100)/100;
            tip_amount.innerText = Math.round((Number(bill.value)*0.1)*100)/100;
        }
        else if(this.textContent ==="15%"){
            total.innerText = Math.round((Number(bill.value) + Number(bill.value)*0.15)*100)/100;
            tip_amount.innerText = Math.round((Number(bill.value)*0.15)*100)/100;
        }
        else if(this.textContent ==="20%"){
            total.innerText = Math.round((Number(bill.value) + Number(bill.value)*0.2)*100)/100;
            tip_amount.innerText = Math.round((Number(bill.value)*0.2)*100)/100;
        }
        else if(this.textContent ==="25%"){
            total.innerText = Math.round((Number(bill.value) + Number(bill.value)*0.25)*100)/100;
            tip_amount.innerText = Math.round((Number(bill.value)*0.25)*100)/100;
        }
    })
})


function custom(){
    total.innerText = Math.round((Number(bill.value) + Number(bill.value)*(Number(tip_custom.value)/100))*100)/100;
    tip_amount.innerText = Math.round((Number(bill.value)*(Number(tip_custom.value)/100))*100)/100;
}

function peoples(){
    total.innerText = Math.round((Number(total.innerText) / Number(people.value))*100)/100;
    tip_amount.innerText = Math.round((Number(tip_amount.innerText)/Number(people.value))*100)/100;
}

function reset(){
    total.innerText = '0.00';
    tip_amount.innerText = '0.00';
}







