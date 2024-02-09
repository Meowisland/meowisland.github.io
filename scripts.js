window.addEventListener('DOMContentLoaded', (event) => {
    var images = document.querySelectorAll('img#non');
    images.forEach(img => {
        img.src = '1.png'; //无头像时的显示
    });
});

function qiehuan() {
    document.body.classList.toggle('dark-mode');
    var sunIcon = document.querySelector('#mode-toggle .sun-icon');
    var moonIcon = document.querySelector('#mode-toggle .moon-icon');
    if (document.body.classList.contains('dark-mode')) {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
    } else {
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
    }
}

function checkSystemTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark-mode');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    checkSystemTheme();
});
