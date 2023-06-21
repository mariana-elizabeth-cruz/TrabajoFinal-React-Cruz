
const misProductos = [
    {id: 1, nombre: "iPhone 9", precio: 5500, img: "/imagenes/iphone.jpg"},
    {id: 2, nombre: "iPhone X", precio: 7500, img: "/imagenes/iphone.jpg"},
    {id: 3, nombre: "Samsung Universe 9", precio: 5400, img: "/imagenes/iphone.jpg"},
    {id: 4, nombre: "OPPOF19", precio: 9500, img: "/imagenes/iphone.jpg"},
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout( () => {
            resolve(misProductos)
        }, 2000)
    })
}