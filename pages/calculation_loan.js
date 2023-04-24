function calculateAPRTOTAL()
{
  let item_loan={}
  
  item_loan.amount = ($("#qty_principal").val());
  
  item_loan.apr = ($("#qty_apr").val() / 100);
  
  item_loan.term = ($("#qty_term").val());
  
  
  let total_interest = item_loan.amount * item_loan.apr * item_loan.term;
 
  const twoDecimalPlaces = total_interest.toFixed(2);
  
  $("#total_value").text(twoDecimalPlaces);
  
}

$(function()
 {
    $(".qty").on("change keyup",calculateAPRTOTAL)
})