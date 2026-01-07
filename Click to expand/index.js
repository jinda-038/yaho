const penels = document.querySelectorAll('.penel')
penels.forEach((element) => {
    element.addEventListener('click', e => {
        removeActive()
        element.classList.add('active')
        pOpcity()
    })
})
const removeActive = () => {
    penels.forEach((actives) => {
        actives.classList.remove('active')
    })
}