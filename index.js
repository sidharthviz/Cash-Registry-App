const Bill = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#check-error");
const getNotes = document.querySelectorAll(".notes");
const ShowUp = document.querySelector("#next");


checkButton.addEventListener("click", function validateBillAmount() {
    if (Bill.value > 0) {
        if(cashGiven.value >= Bill.value ){
            const amountToBeReturned = cashGiven.value - Bill.value;
            returnChange(amountToBeReturned);
        } else {
          showMessage("Wash the plate man!");    
        }
    } else { 
       showMessage("Invalid Bill Amount");
    }
});
  
 function returnChange(amountToBeReturned) {
    for(let i =0; i<availableNotes.length; i++){
        const giveNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
        amountToBeReturned %= availableNotes[i];
        getNotes[i].innerText = giveNotes; 
    }
 }

 ShowUp.addEventListener("click", () => cashGiven.style.display = "block");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

$("#next").on("click", function() {
   $("#cash-given").show();
}) 
 function hideMessage(){
    message.style.display = "block";
 }
function showMessage(error){
    message.style.display = "block"; 
    message.innerText = error;    
}