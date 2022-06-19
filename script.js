const currencyEl_one = $("#currency-one");
const currencyEl_two = $("#currency-two");
const amountEl_one = $("#amount-one");
const amountEl_two = $("#amount-two");

const rateEl = $("#rate");
const calc = $("#calc");

function calculate() {
  const currency_one = currencyEl_one.val();
  const currency_two = currencyEl_two.val();

  $.ajax({
    type: "GET",
    dataType: "json",
    url:
      "https://v6.exchangerate-api.com/v6/83dc21c9de6f338c60c1753e/latest/" +
      currency_one,
  })
    .done(function (response) {
      const rate = response.conversion_rates[currency_two];
      rateEl.text(`1 ${currency_one} = ${rate} ${currency_two}`);
      amountEl_two.val((amountEl_one.val() * rate).toFixed(2));
    })
    .fail(function (error) {
      alert("Error");
      console.log(error);
    });
}

calc.on("click", () => {
  calculate();
});
