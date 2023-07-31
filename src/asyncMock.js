
const products = [
    { id: '1', nombre: 'Metal Gear Solid 3', categoria: 'juegos Play Station 2', precio: '29.99$', stock: 10, minimo: 1, imagen: 'https://uvejuegos.com/img/caratulas/3352/MGS3-JAPb.jpg'},
    { id: '2', nombre: 'Metal Gear Solid 2', categoria: 'juegos Play Station 2', precio: '19.99$', stock: 10, minimo: 1, imagen: 'https://upload.wikimedia.org/wikipedia/en/6/6a/Metalgear2boxart.jpg' },
    { id: '3', nombre: 'Shadow of the Colossus', categoria: 'juegos Play Station 2', precio: '9.99$', stock: 10, minimo: 1, imagen: 'https://www.retro-jogos.com/wp-content/uploads/2020/11/SOTC_COVER.png' },
    { id: '4', nombre: 'Resident Evil 4', categoria: 'juegos Play Station 3', precio: '19.99$', stock: 10, minimo: 1, imagen: 'https://kalimagames.com/wp-content/uploads/2022/08/cover-ps3-44.jpg' },
    { id: '5', nombre: 'Dragon Ball Z Budokai 3', categoria: 'juegos Play Station 3', precio: '49.99$', stock: 10, minimo: 1, imagen: 'https://livingplaystation.com/wp-content/uploads/2012/05/DBZ-Budokai-Tenkaichi-HD-Collection.jpeg' },
    { id: '6', nombre: 'GTA: San Andreas', categoria: 'juegos Play Station 2', precio: '69.99$', stock: 10, minimo: 1, imagen: 'https://i.pinimg.com/originals/d2/e4/45/d2e4450d630030e30fd0ad2f0db8a761.png' },
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filteredProducts = products.filter(
          (prod) => prod.categoria === categoryId
        );
        resolve(filteredProducts);
      }, 500);
    });
  };
  