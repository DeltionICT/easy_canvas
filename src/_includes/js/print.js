const mediaQueryList = window.matchMedia("print");
let panelstate = "";
const arrow_in_img = document.querySelector('#panel-in img');
const arrow_out_img = document.querySelector('#panel-out img');


function voorPrinten() {
    // console.log("Voor printen");
    panelstate = document.getElementById('inhoudsopgave').style.display;
    // console.log("Huidige panelstate:", panelstate);
    hidePanel();
    arrow_in_img.style.display = 'none';
    arrow_out_img.style.display = 'none';

}

function naPrinten() {
    // console.log("Na printen");
    // console.log("Vorige panelstate:", panelstate);
    if (panelstate === 'none') {
        hidePanel();
        arrow_in_img.style.display = 'block';
    } else {
        showPanel();
        arrow_out_img.style.display = 'block';
    }

}

if (window.matchMedia) {
    mediaQueryList.addListener(function(mql) {
        if (mql.matches) {
            voorPrinten();
        } else {
            naPrinten();
        }
    });
}