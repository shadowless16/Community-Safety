function toggleMenu() {
    var nav = document.getElementById('navigation');
    if (nav.classList.contains('active')) {
        nav.classList.remove('active');
    } else {
        nav.classList.add('active');
    }
}

