function passcode(parent) {
    parent.remove();
    $("#origami").show();
}

$("#first").on("click", function(event) {
    //var x = event.pageX - this.offsetLeft;
    //x < this.width / 2 ? alert('Incorrect') : unlocked(this.parentNode);

    var y = event.pageY - this.offsetTop;
    y < this.height / 2 ? alert('Incorrect') : unlocked(this.parentNode);
});

function unlocked(parent) {
    parent.remove();
    $("#homes").show();
}