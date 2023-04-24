function calculateAPYTOTAL()
{
  let item_savings={}
  
  item_savings.deposit = ($("#qty_deposit").val());
  
  item_savings.apy = ($("#qty_apy").val() / 100 / 12);
  
  item_savings.period = ($("#qty_period").val() * 12);
  
  
  let total_savings = item_savings.deposit * ((1 + item_savings.apy) ^ item_savings.period);
 
  const twoDecimalPlaces = total_savings.toFixed(2);
  
  $("#total_value").text(twoDecimalPlaces);
  
}

$(function()
 {
    $(".qty").on("change keyup",calculateAPYTOTAL)
})