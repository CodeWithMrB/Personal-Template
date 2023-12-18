window.onscroll = function() {
    var scrollHeight = window.scrollY;
    var opacity = 1 - (scrollHeight / 364);
    opacity = opacity < 0 ? 0 : opacity; // Ensure opacity is not less than 0
    document.getElementById('main_image').style.opacity = opacity;
};
