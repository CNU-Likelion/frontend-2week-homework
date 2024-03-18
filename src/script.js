$(document).ready(() => {
    let amount = 0;
    let total = 0;
    let tip = 0;
    let price = 0;
    let participants = 1; // 'people'을 'participants'로 변경
  
    init = () => {
      amount = 0;
      total = 0;
      tip = 0;
      price = 0;
      participants = 1; // 변수명 변경
      $(".expense__field").val(""); // '.bill__input'을 '.expense__field'로 변경
      $(".participants__field").val("1"); // '.people__input'을 '.participants__field'로 변경, 기본값 1로 설정
      $(".gratuity__custom").val(""); // '.tip__input'을 '.gratuity__custom'로 변경
      $(".gratuity__option").removeClass("active"); // '.tip__button'을 '.gratuity__option'로 변경
      $(".total-person__value").text("$0.00"); // '.total__amount'를 '.total-person__value'로 변경
      $(".gratuity-person__value").text("$0.00"); // '.tip-amount__amount'를 '.gratuity-person__value'로 변경
      $(".clear").attr("disabled", "disabled"); // '.reset'을 '.clear'로 변경
      $(".clear").removeClass("active"); // 클래스명 변경
    };


    $("button.gratuity__option").on("click", (e) => {
    $(".gratuity__option").removeClass("active"); // 모든 버튼에서 active 클래스 제거
    $(e.target).addClass("active"); // 클릭한 버튼에만 active 클래스 추가
    // 나머지 로직은 동일
    });
  
    $(".clear").on("click", init); // '.reset'을 '.clear'로 변경
  
    updateTotal = () => {
      amount = price * (tip / 100) / participants; // 'people'을 'participants'로 변경
      total = price / participants + amount; // 변수명 변경
  
      $(".total-person__value").text(`$${total.toFixed(2)}`); // '.total__amount'를 '.total-person__value'로 변경
      $(".gratuity-person__value").text(`$${amount.toFixed(2)}`); // '.tip-amount__amount'를 '.gratuity-person__value'로 변경
  
      if (amount != 0 || total != 0) {
        $(".clear").removeAttr("disabled"); // '.reset'을 '.clear'로 변경
        $(".clear").addClass("active"); // 클래스명 변경
      } else {
        $(".clear").attr("disabled", "disabled"); // 클래스명 변경
        $(".clear").removeClass("active"); // 클래스명 변경
      }
    }
  
    $(".expense__field").on("keyup", (e) => {
      let val = $(e.target).val();
      if (val.length < 1) val = 0;
      price = parseFloat(val);
      updateTotal();
    });
  
    $(".participants__field").on("keyup", (e) => {
      participants = parseInt($(e.target).val()); // 'people'을 'participants'로 변경
      if (participants == 0) {
        participants = 1; // 변수명 변경
        $(e.target).val(participants);
        $(".participants__error").show(); // '.people__title__error'를 '.participants__error'로 변경
      }
      updateTotal();
    });
  
    $("button.gratuity__option").on("click", (e) => { // '.tip__button'을 'button.gratuity__option'로 변경
      let active = $("button.gratuity__option.active"); // 클래스명 변경
      active.removeClass("active");
      $(e.target).addClass("active");
  
      tip = parseInt($(e.target).attr("data-value")); // 'data-val'을 'data-value'로 변경
      updateTotal();
    });
    
    $(".gratuity__custom").on("keyup", (e) => { // '.tip__input'을 '.gratuity__custom'로 변경
      let active = $("button.gratuity__option.active"); // 클래스명 변경
      active.removeClass("active");
      tip = parseInt($(e.target).val());
      updateTotal();
    });
  });
  