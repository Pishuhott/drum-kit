document.addEventListener("DOMContentLoaded", function () {
    const keys = document.querySelectorAll('.key');

    function playSound(code) {
        const audio = document.querySelector(`audio[data-key='${code}']`);
        const key = document.querySelector(`.key[data-key='${code}']`);
        if (!audio) return;

        audio.currentTime = 0;
        audio.play();
        key.classList.add('playing');
        console.log(key);
    }

    function removeTransition(e) {
        if (e.propertyName !== 'transform') return;
        this.classList.remove('playing');
    }

    keys.forEach(key => key.addEventListener('click', function (e) {
        this.getAttribute('data-key')
        playSound(this.getAttribute('data-key'))
        console.log(this.getAttribute('data-key'))
    }));

    keys.forEach(key => key.addEventListener('transitionend', removeTransition));

    window.addEventListener('keydown', function (e) {
        playSound(e.keyCode);
    });

});
