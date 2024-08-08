/*updates the text color of the <header> element to red (#FF0000):
 *
 * You must use document.querySelector to select the HTML tag
 * You can’t use the jQuery API
 * Note: Your script must be imported from the <head> tag, not at the end of the HTML
 */

$(document).ready(function () {
    const colorChange = document.querySelector("header");
    colorChange.style.color = "#FF0000";
});
