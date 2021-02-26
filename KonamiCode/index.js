const container = document.getElementById('circle');
const comboCounter = document.getElementById('combo-counter');
const calamardo = "a34yc3";
const bob = "bnxcpt";
const patricio = "110972";
const calamardoCombo = `<img src="https://media.tenor.com/images/a47b9d216da242f48daa59b2bd2dd5c6/tenor.gif" class="gif">`;
const bobCombo = `<img src="https://static.wikia.nocookie.net/obverse-objects/images/6/68/21FF0565-FC16-47E8-85D4-52D26089B12B.gif/revision/latest/scale-to-width-down/200?cb=20190425194335" class="gif">`;
const patricioCombo = `<img src="https://i.gifer.com/origin/88/88ee1b0efe8734d6c419e60c3c7f546f_w200.gif" class="gif">`;

let combo = "";


window.addEventListener('keydown', function (e) {
    if(e.key != 'Backspace') {
        combo += e.key.toLowerCase();
    }
    
    comboCounter.innerText = combo.toUpperCase();

    if(e.key == 'Backspace') {
        combo = "";
        comboCounter.innerText = combo;
        if(container.childElementCount > 0) {
            container.firstChild.remove();
        }
    }

    switch(combo) {
        case calamardo:
            if(container.childElementCount > 0) {
                container.firstChild.remove();
            }
            combo = "";
            container.insertAdjacentHTML('afterbegin', calamardoCombo);
            break;

        case bob:
            if(container.childElementCount > 0) {
                container.firstChild.remove();
            }
            combo = "";
            container.insertAdjacentHTML('afterbegin', bobCombo);
            break;

        case patricio:
            if(container.childElementCount > 0) {
                container.firstChild.remove();
            }
            combo = "";
            container.insertAdjacentHTML('afterbegin', patricioCombo);
            break;
    }
}, false);