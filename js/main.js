const nuevaTirada = document.getElementById("tirar-dado");
nuevaTirada.addEventListener("click", () => {
    console.log("click")
    let numeroDado = parseInt(Math.random() * 6 + 1)
    console.log(numeroDado)
    let printDado = document.getElementById("printear--dado")
    printDado.append(`
    ${numeroDado}
    `)
})