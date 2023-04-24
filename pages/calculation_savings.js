function calculateAPYTOTAL()
{
  let item_savings={}
  
  item_savings.deposit = ($("#qty_deposit").val());
  
  item_savings.apy = (($("#qty_apy").val()/100) / 12) + 1;
  
  item_savings.period = ($("#qty_period").val() * 12);
  
  let annual_savings =  item_savings.apy ** item_savings.period;
  
  let total_savings = item_savings.deposit * annual_savings;
 
  const twoDecimalPlaces = total_savings.toFixed(2);
  
  $("#total_value").text(twoDecimalPlaces);
  
}

$(function()
 {
    $(".qty").on("change keyup",calculateAPYTOTAL)
})