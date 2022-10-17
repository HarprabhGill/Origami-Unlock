function passcode(parent) {
    parent.remove();
    $("#origami").show();
}

let piccounter = 0;
$("#first").on("click", function(event) {
    //var x = event.pageX - this.offsetLeft;
    //x < this.width / 2 ? alert('Incorrect') : unlocked(this.parentNode);

    var y = event.pageY - this.offsetTop;
    var x = event.pageX - this.offsetLeft;

    if(piccounter == 0){
        y < this.height / 2 ? alert('top') : (piccounter +=1, document.getElementById("first").src = "assets/heart3.png");
    }
    else if(piccounter == 1) {
        x < this.width / 2 ? alert('left') : (piccounter +=1, document.getElementById("first").src = "assets/heart4.png");
    }
    else if(piccounter == 2) {
        x < this.width / 2 ? alert('left') : unlocked(this.parentNode);
    }
});

function unlocked(parent) {
    parent.remove();
    $("#homes").show();
}