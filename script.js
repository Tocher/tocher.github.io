var header = document.getElementsByTagName('header')[0];
window.onscroll = function(e, a) {
    var headClasses = header.getAttribute('class');

    if (window.scrollY > 50 && headClasses === null) {
        header.setAttribute('class', 'small');
    }

    if (window.scrollY < 50 && headClasses === 'small') {
        header.removeAttribute('class');
    }
};
