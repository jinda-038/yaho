const content = document.querySelector('.content')
const contentBox = document.querySelectorAll('.content-box')
const navBox = document.querySelectorAll('.nav-box>span')
console.log(navBox);
let count = 0
window.addEventListener('wheel', (event) => {
    if (event.deltaY >= 100) {
        if (count >= contentBox.length - 1) {
            return
        }
        count++
        content.style.transform = `translateY(-${count * 100}vh)`
    } else {
        if (count <= 0) {
            return
        }
        count--
        content.style.transform = `translateY(-${count * 100}vh)`
    }
    navBox.forEach((e, index) => {
        e.classList.remove('active')
        if (index === count) {
            e.classList.add('active')
        }
    })
    console.log(event);
})


const sss = [...document.querySelectorAll('.nav-box span')]
console.log(sss);
