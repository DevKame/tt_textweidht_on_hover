"use strict";

const sentences = [];
const p = document.querySelectorAll("p");

p.forEach(pa => {
    sentences.push(pa.innerText);
    pa.innerText = "";
});

sentences.forEach((sen, idx) => {
    for(let char of sen) {
        const span = document.createElement("span");
        span.innerText = char;
        p[idx].append(span);
        span.addEventListener("mouseenter", expandChar);
        span.addEventListener("mouseleave", collapseChar);
    }
});


function expandChar(e) {
    e.target.style.fontWeight = "1000";
    e.target.style.fontSize = "17px";
    let fstR = e.target.nextElementSibling;
    let fstL = e.target.previousElementSibling;
    let sndR;
    let sndL;
    if(fstL) {
        sndL = fstL.previousElementSibling;
    }
    if(fstR) {
        sndR = fstR.nextElementSibling;
    }


    if(fstR) {
        fstR.style.fontWeight = "800";
        fstR.fontSize = "15px";
    }
    if(fstL) {
        fstL.style.fontWeight = "800";
        fstL.fontSize = "15px";
    }
    if(sndR) sndR.style.fontWeight = "600";
    if(sndL) sndL.style.fontWeight = "600";
}
function collapseChar(e) {
    e.target.style.fontWeight = "400";
    e.target.style.fontSize = "13px";
    let fstR = e.target.nextElementSibling;
    let fstL = e.target.previousElementSibling;
    let sndR;
    let sndL;
    if(fstL) {
        sndL = fstL.previousElementSibling;
    }
    if(fstR) {
        sndR = fstR.nextElementSibling;
    }

    
    if(fstR) fstR.style.fontWeight = "400";
    if(fstL) fstL.style.fontWeight = "400";
    if(sndR) sndR.style.fontWeight = "400";
    if(sndL) sndL.style.fontWeight = "400";
}