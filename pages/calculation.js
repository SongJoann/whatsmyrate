function calculateAPRTOTAL()
{
  let item_current={}
  
  item_current.balance = ($("#qty_principal").val());
  
  item_current.apr = ($("#qty_apr").val() / 12 / 100);
  
  item_current.period = ($("#qty_period").val());
  
  
  let total_interest = item_current.balance * item_current.apr;
 
  $("#total_value").text(total_interest);
  
}

$(function()
 {
    $(".qty").on("change keyup",calculateAPRTOTAL)
})
