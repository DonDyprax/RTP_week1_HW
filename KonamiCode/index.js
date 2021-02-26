const container = document.getElementById('circle');
const comboCounter = document.getElementById('combo-counter');
const calamardo = "a34yc3";
const banana = "bnxcpt";
const patrick = "110972";
const calamardoCombo = `<img src="https://media.tenor.com/images/a47b9d216da242f48daa59b2bd2dd5c6/tenor.gif" class="gif">`;
const bananaCombo = `<img src="http://cdn.lowgif.com/full/17e3da5e013b3330-emoji-transparent-gif-on-gifer-by-kadal.gif" class="gif">`;
const patrickCombo = `<img src="https://i.gifer.com/origin/88/88ee1b0efe8734d6c419e60c3c7f546f_w200.gif" class="gif">`;

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

        case banana:
            if(container.childElementCount > 0) {
                container.firstChild.remove();
            }
            combo = "";
            container.insertAdjacentHTML('afterbegin', bananaCombo);
            break;

        case patrick:
            if(container.childElementCount > 0) {
                container.firstChild.remove();
            }
            combo = "";
            container.insertAdjacentHTML('afterbegin', patrickCombo);
            break;
    }
}, false);