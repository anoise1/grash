let rootStyle = window.getComputedStyle(document.documentElement)
let thColor = rootStyle.getPropertyValue("--th-theme-bg-color");
if (thColor.charAt(0) == "#") {
    thColor = thColor.slice(1);
}
let r = parseInt(thColor.slice(0, 2), 16);
let g = parseInt(thColor.slice(2, 4), 16);
let b = parseInt(thColor.slice(4, 6), 16);
