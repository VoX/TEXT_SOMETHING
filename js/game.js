(function($){

var ioArea = $("#game");

//make new button
var btn = $("<button>Click</button>").attr("id","button1");
ioArea.append(btn);

//make new textbox
var text = $("<span>DONT CLICK!</span>").attr("id","text");
ioArea.append(text);

//event to button
btn.click(function(){
	text.text("Y U CLICK!")
	
});




}(window.jQuery));