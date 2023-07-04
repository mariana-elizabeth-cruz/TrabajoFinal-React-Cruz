
const misProductos = [
    {id: "1", nombre: "iPhone 9", precio: 5500, img: "/imagenes/iphone.jpg", idCat: "2"},
    {id: "2", nombre: "iPhone X", precio: 7500, img: "/imagenes/iphoneX.jpg", idCat: "2"},
    {id: "3", nombre: "Samsung Universe 9", precio: 5400, img: "/imagenes/samsung.jpg", idCat: "3"},
    {id: "4", nombre: "OPPOF19", precio: 9500, img: "/imagenes/OPPOF19.png", idCat: "3"},
    {id: "5", nombre: "Alcatel 1", precio: 10000, img: "/imagenes/alcatel1.png", idCat: "1"},
    {id: "6", nombre: "Alcatel 3H", precio: 11000, img: "/imagenes/alcatel3H.jpg", idCat: "1"},
    {id: "7", nombre: "Alcatel 5H", precio: 11250, img: "/imagenes/alcatel5H.jpg", idCat: "1"},
    {id: "8", nombre: "Iphone 13", precio: 30250, img: "/imagenes/iphone13.jpg", idCat: "2"},
    {id: "9", nombre: "Motorola E13", precio: 20200, img: "/imagenes/motorolaE13.jpg", idCat: "4"},
    {id: "10", nombre: "Motorola E22", precio: 21230, img: "/imagenes/motorolaE22.jpg", idCat: "4"},
    {id: "11", nombre: "Motorola E32", precio: 25140, img: "/imagenes/motorolaE32.jpg", idCat: "4"},
    {id: "12", nombre: "Motorola G13", precio: 30100, img: "/imagenes/motorolaG13.jpg", idCat: "4"},
    {id: "13", nombre: "Motorola G42", precio: 32000, img: "/imagenes/motorolaG42.jpg", idCat: "4"},
    {id: "14", nombre: "Motorola G72", precio: 35200, img: "/imagenes/motorolaG72.jpg", idCat: "4"},
    {id: "15", nombre: "Quantum Q20", precio: 8500, img: "/imagenes/quantumQ20.jpg", idCat: "5"},
    {id: "16", nombre: "Quantum Q Rash", precio: 12000, img: "/imagenes/quantumQRash.jpg", idCat: "5"},
    {id: "17", nombre: "Quantum Yolo", precio: 13500, img: "/imagenes/quantumYolo.jpg", idCat: "5"},
    {id: "18", nombre: "Samsung 13", precio: 25000, img: "/imagenes/samsung13.jpg", idCat: "3"},
    {id: "19", nombre: "Samsung A03", precio: 13000, img: "/imagenes/samsungA03.jpg", idCat: "3"},
    {id: "20", nombre: "Samsung A14", precio: 15400, img: "/imagenes/samsungA14.jpg", idCat: "3"},
    {id: "21", nombre: "Samsung A21", precio: 16200, img: "/imagenes/samsungA21.jpg", idCat: "3"},
    {id: "22", nombre: "Samsung A23", precio: 18500, img: "/imagenes/samsungA23.jpg", idCat: "3"},
    {id: "23", nombre: "Samsung A24", precio: 12300, img: "/imagenes/samsungA24.jpg", idCat: "3"},
    {id: "24", nombre: "Samsung A34", precio: 65200, img: "/imagenes/samsungA34.jpg", idCat: "3"},
    {id: "25", nombre: "Samsung A40S", precio: 56200, img: "/imagenes/samsungA40s.jpg", idCat: "3"},
    {id: "26", nombre: "Samsung A54", precio: 45200, img: "/imagenes/samsungA54.jpg", idCat: "3"},
    {id: "27", nombre: "TCL 30SE", precio: 45210, img: "/imagenes/tcl30SE.png", idCat: "6"},
    {id: "28", nombre: "TCL 305I", precio: 35400, img: "/imagenes/tcl305i.jpg", idCat: "6"},
    {id: "29", nombre: "TCL 403", precio: 42100, img: "/imagenes/tcl403.jpg", idCat: "6"},
    {id: "30", nombre: "TCL 405", precio: 35100, img: "/imagenes/tcl405.jpg", idCat: "6"},
    {id: "31", nombre: "Motorola G23", precio: 35600, img: "/imagenes/motorolaG23.jpg", idCat: "4"},
    {id: "32", nombre: "Motorola G32", precio: 45100, img: "/imagenes/motorolaG32.jpg", idCat: "4"},
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