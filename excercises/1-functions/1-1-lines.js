'use strict';
import context from "../../context/context.js";

function drawFish() {

    context.lineWidth = 5;
    context.beginPath();
    context.moveTo(57, 390);
    context.lineTo(390, 95);
    context.lineTo(550, 320);
    context.stroke();

}

drawFish();