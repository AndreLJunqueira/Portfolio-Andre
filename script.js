function dia() {
    const body = document.body
    const img = document.querySelector(`img`)

    if (body.classList.contains(`light`)) {
        body.classList.remove(`light`)
        img.setAttribute(`src`, `AndréP.png`)
    } else {
        body.classList.add(`light`)
        img.setAttribute(`src`, `andrérecorte.png`)
    }
}
