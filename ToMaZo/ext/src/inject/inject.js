window.onload = function() {
  console.log("Hello!");
  var runConvPromo = setInterval(function() {convPromo()}, 100);
}

document.addEventListener( "click", someListener );

function someListener(event){
  //Listener to first click, runs IF loop when button is pressed.
  //If we want to execute this only when someone tries to put up a promo.
    var element = event.target;
    if(element.tagName == 'DIV' && element.classList.contains("button")){

    }
}

function convPromo(){
  if($('.totals.clear').html().indexOf("Promo")==-1){
    $('.ui.large.green.fluid.button.checkout').css("background-color", "red");
    $('.ui.large.green.fluid.button.checkout').html("Pay without promo");
  }
  else{
    $('.ui.large.green.fluid.button.checkout').css("background-color", "green");
    $('.ui.large.green.fluid.button.checkout').html("Pay");
  }
}
