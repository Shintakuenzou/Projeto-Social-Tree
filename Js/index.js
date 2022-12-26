function toggle() {
    let html = document.documentElement
    const btn = document.querySelector('#switch')
    btn.addEventListener('click', () => {
        html.classList.toggle('light')
    })
}
toggle()