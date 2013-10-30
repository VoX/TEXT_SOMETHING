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
	counter = 0;
	secretCounter++;
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

//reward for clicking :)
//SUCH ESCAPE
var superSecret = $("<div>THIS IS A SECRET</div>");
ioArea.append(superSecret);

var counter = 0;
var secretCounter = 0;

setInterval(function() {
      // Do something every 0.5 seconds, like update the counter
      counter = counter + 1;
      counterDisplay.text(counter);

      //oh lets do some flow control
      if(counter > 10){
      	message.text("HOLY SHIT LOOK AT ALL THESE COUNTS!");
      }
      // is this bad or bad
      if(secretCounter % 2 == 1){
      	superSecret.show();
      }
      else{
      	superSecret.hide();
      }


}, 500);

}(window.jQuery));