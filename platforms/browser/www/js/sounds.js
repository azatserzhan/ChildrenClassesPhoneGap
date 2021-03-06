var soundBG;
var sound;
var soundArr = [];

var mySound = {
    //Вызов звуков
    play: function(src) {

        if (localStorage.getItem('soundSfx') == 'true') {
            try {
                src = src[res.lang];
                sound = new Audio(src);
                console.log('play src: ', src)
                sound.play();
                soundArr.push(sound);
            } catch (e) {
                console.log('sounds.js файл не найден');
            }
        }
    },

    playBackgroundSound: function() {
        try {
            soundBG.pause();
        } catch (e) {}
        soundBG = new Audio(mySound.bgSrc);
        soundBG.volume = 0.01; //0.05
        soundBG.loop = true;

        if (localStorage.getItem('soundBg') == 'true') {
            soundBG.play();
        }
    },

    bgSrc: '',

    menuBtnHref: '',

    stop: function() {
        for (var i = 0; i < soundArr.length; i++) {
            soundArr[i].pause();
        }
    },

    stopBG: function() {
        soundBG.pause();
    },

    playBgSound: function() {
        soundBG.play();
    },

    //звуки
    trueSound: function() {
        mySound.play(['../sounds/true.mp3', '../sounds/true.mp3']);
    },

    falseSound: function() {
        mySound.play(['../sounds/false.mp3', '../sounds/false.mp3']);
        this.lifeShow(gameAction.life)
    },
}