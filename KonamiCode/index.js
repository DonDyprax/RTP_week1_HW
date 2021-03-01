const container = document.getElementById('circle');
const comboCounter = document.getElementById('combo-counter');
const calamardo = "a34yc3";
const bob = "bnxcpt";
const patricio = "110972";
const calamardoCombo = `<img src="assets/calamardo.gif" class="gif">`;
const bobCombo = `<img src="assets/bob.webp" class="gif">`;
const patricioCombo = `<img src="assets/patricio.gif" class="gif">`;

let combo = "";


window.addEventListener('keydown', function (e) {
    if(e.key != '\\') {
        combo += e.key.toLowerCase();
    }
    
    comboCounter.innerText = combo.toUpperCase();

    if(e.key == '\\') {
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