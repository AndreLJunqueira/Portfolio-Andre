function dia() {
    const body = document.body

    if(body.classList.contains(`light`)) {
        body.classList.remove(`light`)
    } else {
        body.classList.add(`light`)
    }
    const img = document.querySelector(`img`)

    if(body.classList.contains(`light`)) {
        img.setAttribute(`src`, `AndréP.png`)
    } else {
        img.setAttribute(`src`, `andrérecorte.png`)
    }

    
}
   