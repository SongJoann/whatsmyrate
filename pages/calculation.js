function calculateTotal()
{
  let item_price={}
  
  item_price.sugar = ($("#qty_sugar").val() * unit_price.sugar )
  $("#price_sugar").val(item_price.sugar);
  
  item_price.butter = ($("#qty_butter").val() * unit_price.butter )
  $("#price_butter").val(item_price.butter);
  
  item_price.eggs = ($("#qty_eggs").val() * unit_price.eggs )
  $("#price_eggs").val(item_price.eggs);  
  
  
  let total = item_price.sugar + item_price.butter + item_price.eggs;

 
  $("#total_value").text(total);
  
}

$(function()
 {
    $(".qty").on("change keyup",calculateTotal)
})
