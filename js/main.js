document.addEventListener("DOMContentLoaded", function () {
    const keys = document.querySelectorAll('.key');
    let audios = document.querySelectorAll('audio');


    // function playSound(e) {
    //     const audio = document.querySelector(`audio[data-key='${e.keyCode}']`),
    //         key = document.querySelector(`.key[data-key='${e.keyCode}']`);
    //     if (!audio) return;

    //     audio.currentTime = 0;
    //     audio.play();
    //     key.classList.add('playing');
    // }

    function removeTransition(e) {
        if (e.propertyName !== 'transform') return;
        this.classList.remove('playing');        
    }

    keys.forEach(key => key.addEventListener('transitionend', removeTransition));

    window.addEventListener('keydown', function (e) {
        const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
        key = document.querySelector(`.key[data-key='${e.keyCode}']`);
        if (!audio) return;

        audio.currentTime = 0;
        audio.play();
        key.classList.add('playing');

        console.log(audio);
    });

    let audiosAll = function () {
        for (let i = 0; i < audios.length; i++) {
            let audio = audios[i];
            console.log(audio);
        };
    };

    
    
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        key.addEventListener('click', function (e) {
            // const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);


            console.log(audios{e.keyCode});
        });
    };






});
