function calculateVAT() {
    var amount = document.getElementById("amountInput").value;
    var vatRate = 0.15; // 15%

    var vat = amount * vatRate;
    var totalAmount = parseFloat(amount) + vat;

    document.getElementById("result").innerHTML = "VAT amount (15%): R" + vat.toFixed(2) + "<br>" +
                                                    "Total amount with VAT: R" + totalAmount.toFixed(2);
  }