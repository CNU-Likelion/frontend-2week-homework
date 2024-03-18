$(document).ready(() => {
  let amount = 0;
  let total = 0;
  let tip = 0;
  let price = 0;
  let people = 1;

  init = () => {
    amount = 0;
    total = 0;
    tip = 0;
    price = 0;
    people = 1;
    $(".bill__input").val("");
    $(".people__input").val("");
    $(".tip__input").val("");
    $(".tip__button").removeClass("active");
    $(".total__amount").text("$0.00");
    $(".tip-amount__amount").text("$0.00");
    $(".reset").attr("disabled", "disabled");
    $(".reset").removeClass("active");
  };

  $(".reset").on("click", init);

  updateTotal = () => {
    amount = price * (tip / 100) / people;
    total = price / people + amount;

    $(".total__amount").text(`$${total.toFixed(2)}`);
    $(".tip-amount__amount").text(`$${amount.toFixed(2)}`);

    if (amount != 0 || total != 0) {
      $(".reset").removeAttr("disabled");
      $(".reset").addClass("active");
    } else {
      $(".reset").attr("disabled", "disabled");
      $(".reset").removeClass("active");
    }
  }

  $(".bill__input").on("keyup", (e) => {
    let val = $(e.target).val();
    if (val.length < 1) val = 0;
    price = parseFloat(val);
    updateTotal();
  });

  $(".people__input").on("keyup", (e) => {
    people = parseInt($(e.target).val());
    if (people == 0) {
      people = 1;
      $(e.target).val(people);
      $(".people__title__error").show();
    }
    updateTotal();
  });

  $("button.tip__button").on("click", (e) => {
    let active = $("button.tip__button.active");
    active.removeClass("active");
    $(e.target).addClass("active");

    tip = parseInt($(e.target).attr("data-val"));
    updateTotal();
  });
  
  $(".tip__input").on("keyup", (e) => {
    let active = $("button.tip__button.active");
    active.removeClass("active");
    tip = parseInt($(e.target).val());
    updateTotal();
  });


});