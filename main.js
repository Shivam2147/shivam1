
// function init() {
//     let menu = document.getElementById("menu")
//     let nav = document.getElementById("mab_nav")
//     let smallpen = false;

//     document.addEventListener('DOMContentLoaded', () => {
//         if (smallpen === false) {
//             nav.style.right = "-100%"
//         }
//     })
//     menu.addEventListener('click', () => {
//         if (smallpen != true) {
//             nav.style.right = '0';
//             smallpen = false;
//         }
//     })

//     nav.children[0].addEventListener('click', () => {
//         nav.style.right = '-100%';
//         smallpen = true;
//     })
// }

let sidebar_open = document.getElementById('mab_nav')
let sidebar_close = document.getElementById('menu')
let close1 = document.getElementById('close')
let small_open = false

sidebar_close.addEventListener('click', () =>{
    sidebar_open.style.right = '0%'
})

close1.addEventListener('click', () =>{
    sidebar_open.style.right = '-100%'
    // console.log('hello');
})



