var audio;
window.onload = function () {

};

function sound() {
    addHee();
    var audio = $('#hee_sound');
    audio[0].load();
    audio[0].pause();
    audio[0].currentTime = 0;
    audio[0].play();
}

function buttonPush() {
    var $thisButton = $(".button");
    $thisButton.addClass("pushed");
    setTimeout(function () {
        $thisButton.removeClass("pushed");
    }, 1200);
}
