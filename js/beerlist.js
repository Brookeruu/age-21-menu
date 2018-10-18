var ageDrink = function(age) {
  if(age >= 21) {
    return true;
  }else{
    return false;
  }
}




$(document).ready(function() {
  $("form#age").submit(function(event) {
    event.preventDefault();
    var ageInput = parseInt($("#userAge").val());
    var result = ageDrink(ageInput);
    $("#output").text(ageInput);
    if(result === true) {
      $("#drinks").show();
      $("#under-21").hide();
    }else {
      $("#drinks").hide();
      $("#under-21").show();
    }

    console.log("Age is " + ageInput);
    console.log("Over 21? " + result);
  });
});
