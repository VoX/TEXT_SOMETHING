(function($){

var ioArea = $("#game");



//make new textbox
var message = $("<h2>DONT CLICK!</h2>");
ioArea.append(message);
//make new button
var btn = $("<button>Click</button>");
ioArea.append(btn);

//event to button
btn.click(function(){
	message.text("Y U CLICK!");
	
});


//make a multi part area to hold counter
var counterDiv = $("<div></div>");
ioArea.append(counterDiv);

//put a lable in the counter area
var counterLabel = $("<h2>WHAT IS COUNTING?!?!?:</h2>");
ioArea.append(counterLabel);

//put the counter placeholder in the counter area
var counterDisplay = $("<h2>0</h2>");
ioArea.append(counterDisplay);

var counter = 0;

setInterval(function() {
      // Do something every 0.5 seconds, like update the counter
      counter = counter + 1;
      counterDisplay.text(counter);
}, 500);

}(window.jQuery));