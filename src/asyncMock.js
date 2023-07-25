const products = [
    { id: '1', nombre: 'Metal Gear Solid 3', categoria: 'juegos Play Station 2', precio: '29.99$', stock: 10, minimo: 1, imagen: 'https://images.app.goo.gl/MCUHu8bFpEXgNEpt6' },
    { id: '2', nombre: 'Metal Gear Solid 2', categoria: 'juegos Play Station 2', precio: '19.99$', stock: 10, minimo: 1, imagen: 'https://images.app.goo.gl/5GttZxSxt4pu4VFu6' },
    { id: '3', nombre: 'Shadow of the Colossus', categoria: 'juegos Play Station 2', precio: '9.99$', stock: 10, minimo: 1, imagen: 'https://images.app.goo.gl/VfH2WxHoGmehJtiH7' },
    { id: '4', nombre: 'Resident Evil 4', categoria: 'juegos Play Station 2', precio: '19.99$', stock: 10, minimo: 1, imagen: 'https://images.app.goo.gl/RQzUbUVYjPkhNmyGA' },
    { id: '5', nombre: 'Dragon Ball Z Budokai 3', categoria: 'juegos Play Station 2', precio: '49.99$', stock: 10, minimo: 1, imagen: 'https://images.app.goo.gl/TadNALC5wiZdunNZ8' },
    { id: '6', nombre: 'GTA: San Andreas', categoria: 'juegos Play Station 2', precio: '69.99$', stock: 10, minimo: 1, imagen: 'https://images.app.goo.gl/KW3qam449b1n3FXk9' },
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}