//  IGNORE THIS FILE
//  USING ANOTHER METHOD TO GET SAME RESULT
 
 const loanAmount = document.getElementById("loan-amount");
 const loanTenure = document.getElementById("no-of-month");
 const loanRate = document.getElementById("interest-rate");

 const loanEmi = document.querySelector(".loan-emi");
 const loanPrincipal = document.querySelector(".loan-principal");
 const loanTotal = document.querySelector(".loan-total");
 const loanInterest = document.querySelector(".loan-interest");

 const submitBtn = document.getElementById("calc-btn");

 submitBtn.addEventListener("click", function () {
     amount = loanAmount.value;
     tenure = (loanTenure.value) * 12 //1 year - 12 months
     rate = (loanRate.value) / 12 / 100; //loan rate per year / 100 - loan percentage
     emi = ((amount * rate * (1 + rate) ** tenure) / (((1 + rate) ** tenure) - 1));
    //  alert(Math.floor(emi));
     //  alert(emi);
     total = emi * tenure; // amount to be paid including interest
     interest = total - amount //interest = total amount - principal amount
     //  alert(total);
     //  alert(interest);

     loanAmount.textContent = "emi";
     loanEmi.innerHTML = Math.floor(emi);
     loanPrincipal.innerHTML = Math.floor(amount);
     loanTotal.innerHTML = Math.floor(total);
     loanInterest.innerHTML = Math.floor(interest);
 });