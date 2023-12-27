
function init() {
    let menu = document.getElementById("menu");
    let nav = document.getElementById("mab_nav")
    let smallpen = false;

    document.addEventListener('DOMContentLoaded', () => {
        if (smallpen === false) {
            nav.style.right = "-100%"
        }
    })
    menu.addEventListener('click', () => {
        if (smallpen != true) {
            nav.style.right = '0';
            smallpen = true;
        }
    });

    nav.children[0].addEventListener('click', () => {
        nav.style.right = '-100%';
        smallpen = false;
    })

}





