
const misProductos = [
    {id: "1", nombre: "iPhone 9", precio: 5500, img: "/imagenes/iphone.jpg", idCat: "2"},
    {id: "2", nombre: "iPhone X", precio: 7500, img: "/imagenes/iphoneX.jpg", idCat: "2"},
    {id: "3", nombre: "Samsung Universe 9", precio: 5400, img: "/imagenes/samsung.jpg", idCat: "3"},
    {id: "4", nombre: "OPPOF19", precio: 9500, img: "/imagenes/OPPOF19.png", idCat: "3"},
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout( () => {
            resolve(misProductos)
        }, 2000)
    })
}

export const getUnProducto = (id) => {
    return new Promise( resolve => {
        setTimeout(() => {
            const producto = misProductos.find(prod => prod.id === id);
            resolve(producto);
        }, 2000);
    })
}

// funcion que retorna toda la categoria

export const getCategoria = (idCategoria) => {
    return new Promise( resolve => {
        setTimeout( () => {
            const productoCategoria = misProductos.filter( prod => prod.idCat === idCategoria);
            resolve(productoCategoria);
        }, 2000)
    })
}