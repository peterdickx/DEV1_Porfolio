'use strict';
/**
 * @param {number} h the hue in degrees
 * @param {number} s the saturation in percentage
 * @param {number} l the lightness in percentage
 */
export function hsl(h, s, l) {
    return 'hsl(' + h + "," + s + "%," + l + '%)';
}

/**
 * @param {number} r red (8bits, number between 0-255)
 * @param {number} g green (8bits, number between 0-255)
 * @param {number} b blue (8bits, number between 0-255)
 */
export function rgb(r, g, b) {
    return 'rgb(' + r + "," + g + "," + b + ')';
}

export function degrees(degrees) {
    return degrees * (Math.PI / 180);
}