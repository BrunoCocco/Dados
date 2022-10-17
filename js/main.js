// const nuevaTirada = document.getElementById("tirar-dado");
// nuevaTirada.addEventListener("click", () => {
//     console.log("click")
//     let numeroDado = parseInt(Math.random() * 6 + 1)
//     console.log(numeroDado)
//     let printDado = document.getElementById("printear--dado")
//     printDado.appendChild(`
//     ${numeroDado}
//     `)
// })

const nuevaTirada = document.getElementById("tirar-dado");
nuevaTirada.addEventListener("click", () => {
    console.log("click")
    let numeroDado = parseInt(Math.random() * 6 + 1)
    console.log(numeroDado)
    const agregarNumeroAlDom = document.createElement(`h1`)
    agregarNumeroAlDom.appendChild
})



const borrarTirada = document.getElementById("borrar-dado");
borrarTirada.addEventListener("click", () => {
    console.log(borrarTirada)
    let printDado = document.getElementById("printear--dado")
    printDado.remove()
})
