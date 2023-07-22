import { db } from "./services/config";
import { collection, addDoc } from "firebase/firestore";


const misProductos = [
    { id: "1", nombre: "iPhone 9", precio: 5500, stock: 10, img: "/imagenes/iphone.jpg", idCat: "2" },
    { id: "2", nombre: "IPhone X", precio: 7500, stock: 10, img: "/imagenes/iphoneX.jpg", idCat: "2" },
    { id: "3", nombre: "Samsung Universe 9", precio: 5400, stock: 10, img: "/imagenes/samsung.jpg", idCat: "3" },
    { id: "4", nombre: "Oppo F19 Pro", precio: 9500, stock: 10, img: "/imagenes/OPPOF19.png", idCat: "9" },
    { id: "5", nombre: "Alcatel 1", precio: 10000, stock: 10, img: "/imagenes/alcatel1.png", idCat: "1" },
    { id: "6", nombre: "Alcatel 3H", precio: 11000, stock: 10, img: "/imagenes/alcatel3H.jpg", idCat: "1" },
    { id: "7", nombre: "Alcatel 5H", precio: 11250, stock: 10, img: "/imagenes/alcatel5H.jpg", idCat: "1" },
    { id: "8", nombre: "Iphone 13", precio: 30250, stock: 10, img: "/imagenes/iphone13.jpg", idCat: "2" },
    { id: "9", nombre: "Motorola E13", precio: 20200, stock: 10, img: "/imagenes/motorolaE13.jpg", idCat: "4" },
    { id: "10", nombre: "Motorola E22", precio: 21230, stock: 10, img: "/imagenes/motorolaE22.jpg", idCat: "4" },
    { id: "11", nombre: "Motorola E32", precio: 25140, stock: 10, img: "/imagenes/motorolaE32.jpg", idCat: "4" },
    { id: "12", nombre: "Motorola G13", precio: 30100, stock: 10, img: "/imagenes/motorolaG13.jpg", idCat: "4" },
    { id: "13", nombre: "Motorola G42", precio: 32000, stock: 10, img: "/imagenes/motorolaG42.jpg", idCat: "4" },
    { id: "14", nombre: "Motorola G72", precio: 35200, stock: 10, img: "/imagenes/motorolaG72.jpg", idCat: "4" },
    { id: "15", nombre: "Quantum Q20", precio: 8500, stock: 10, img: "/imagenes/quantumQ20.jpg", idCat: "5" },
    { id: "16", nombre: "Quantum Q Rash", precio: 12000, stock: 10, img: "/imagenes/quantumQRash.jpg", idCat: "5" },
    { id: "17", nombre: "Quantum Yolo", precio: 13500, stock: 10, img: "/imagenes/quantumYolo.jpg", idCat: "5" },
    { id: "18", nombre: "Samsung 13", precio: 25000, stock: 10, img: "/imagenes/samsung13.jpg", idCat: "3" },
    { id: "19", nombre: "Samsung A03", precio: 13000, stock: 10, img: "/imagenes/samsungA03.jpg", idCat: "3" },
    { id: "20", nombre: "Samsung A14", precio: 15400, stock: 10, img: "/imagenes/samsungA14.jpg", idCat: "3" },
    { id: "21", nombre: "Samsung A21", precio: 16200, stock: 10, img: "/imagenes/samsungA21.jpg", idCat: "3" },
    { id: "22", nombre: "Samsung A23", precio: 18500, stock: 10, img: "/imagenes/samsungA23.jpg", idCat: "3" },
    { id: "23", nombre: "Samsung A24", precio: 12300, stock: 10, img: "/imagenes/samsungA24.jpg", idCat: "3" },
    { id: "24", nombre: "Samsung A34", precio: 65200, stock: 10, img: "/imagenes/samsungA34.jpg", idCat: "3" },
    { id: "25", nombre: "Samsung A40S", precio: 56200, stock: 10, img: "/imagenes/samsungA40s.jpg", idCat: "3" },
    { id: "26", nombre: "Samsung A54", precio: 45200, stock: 10, img: "/imagenes/samsungA54.jpg", idCat: "3" },
    { id: "27", nombre: "TCL 30SE", precio: 45210, stock: 10, img: "/imagenes/tcl30SE.png", idCat: "6" },
    { id: "28", nombre: "TCL 305I", precio: 35400, stock: 10, img: "/imagenes/tcl305i.jpg", idCat: "6" },
    { id: "29", nombre: "TCL 403", precio: 42100, stock: 10, img: "/imagenes/tcl403.jpg", idCat: "6" },
    { id: "30", nombre: "TCL 405", precio: 35100, stock: 10, img: "/imagenes/tcl405.jpg", idCat: "6" },
    { id: "31", nombre: "Motorola G23", precio: 35600, stock: 10, img: "/imagenes/motorolaG23.jpg", idCat: "4" },
    { id: "32", nombre: "Motorola G32", precio: 45100, stock: 10, img: "/imagenes/motorolaG32.jpg", idCat: "4" },
    { id: "33", nombre: "Zte A31 Plus Gris", precio: 29999, stock: 10, img: "/imagenes/zte-a31-plus.jpg", idCat: "7" },
    { id: "34", nombre: "Zte Blade V40 Vita", precio: 65000, stock: 10, img: "/imagenes/ZTE-V40-VITA.jpg", idCat: "7" },
    { id: "35", nombre: "Zte Blade A52 Gris", precio: 39900, stock: 10, img: "/imagenes/zteBlade-A52.jpg", idCat: "7" },
    { id: "36", nombre: "Zte Blade A53 Plus Gris", precio: 42900, stock: 10, img: "/imagenes/ZTE-Blade-A53.jpg", idCat: "7" },
    { id: "37", nombre: "Zte Blade A71 Gris", precio: 44900, stock: 10, img: "/imagenes/zteBladeA71.png", idCat: "7" },
    { id: "38", nombre: "Zte A5 Plus Negro", precio: 31900, stock: 10, img: "/imagenes/zteBladeA5.png", idCat: "7" },
    { id: "39", nombre: "Zte Blade V40 Design Negro", precio: 69900, stock: 10, img: "/imagenes/zteBladeV40Design.jpg", idCat: "7" },
    { id: "40", nombre: "Zte Blade A72S Gris", precio: 59900, stock: 10, img: "/imagenes/zte-blade-a72s.jpg", idCat: "7" },
    { id: "41", nombre: "Nokia 225 teléfono 4G", precio: 2599, stock: 10, img: "/imagenes/nokia225.jpg", idCat: "8" },
    { id: "42", nombre: "Nokia 6300 4G", precio: 6899, stock: 10, img: "/imagenes/nokia6300.jpg", idCat: "8" },
    { id: "43", nombre: "Nokia G10 Android 11", precio: 77100, stock: 10, img: "/imagenes/nokiaG10.jpg", idCat: "8" },
    { id: "44", nombre: "Nokia G20 Android 11", precio: 46500, stock: 10, img: "/imagenes/nokiaG20.jpg", idCat: "8" },
    { id: "45", nombre: "T-Mobile Nokia Lumia 635", precio: 11890, stock: 10, img: "/imagenes/nokiaLumia635.jpg", idCat: "8" },
    { id: "46", nombre: "Nokia 2.4 Android 10", precio: 64000, stock: 10, img: "/imagenes/nokia24.jpg", idCat: "8" },
    { id: "47", nombre: "Nokia C01 Plus Android 11 (GO Edition)", precio: 63800, stock: 10, img: "/imagenes/NokiaC01.png", idCat: "8" },
    { id: "48", nombre: "Nokia E70-00 pantalla táctil", precio: 10000, stock: 10, img: "/imagenes/nokiaE7.jpg", idCat: "8" },
    { id: "49", nombre: "Nokia C21 Android 11 GO Edition", precio: 89900, stock: 10, img: "/imagenes/nokiaC21.jpg", idCat: "8" },
    { id: "50", nombre: "Nokia 2.2 Smartphone", precio: 23900, stock: 10, img: "/imagenes/nokia22.jpg", idCat: "8" },
    { id: "51", nombre: "Nokia 3.1 Plus Android 9.0", precio: 12700, stock: 10, img: "/imagenes/nokia31plus.jpg", idCat: "8" },
    { id: "52", nombre: "Nokia Lumia 735 Negro (Verizon Wireless)", precio: 64000, stock: 10, img: "/imagenes/nokiaLumia735.jpg", idCat: "8" },
    { id: "53", nombre: "Nokia Lumia 928 Negro (Verizon Wireless)", precio: 38100, stock: 10, img: "/imagenes/nokiaL928.jpg", idCat: "8" },
    { id: "54", nombre: "Nokia E72", precio: 22600, stock: 10, img: "/imagenes/nokiaE72.jpg", idCat: "8" },
    { id: "55", nombre: "Nokia 5.4 Android 10", precio: 21000, stock: 10, img: "/imagenes/nokia54.jpg", idCat: "8" },
    { id: "56", nombre: "Nokia Lumia 1020", precio: 50000, stock: 10, img: "/imagenes/nokiaL1020.png", idCat: "8" },
    { id: "57", nombre: "Oppo A78 5G (Glowing Blue, 8GB RAM, 128 Storage)", precio: 80900, stock: 10, img: "/imagenes/oppoA78.jpg", idCat: "9" },
    { id: "58", nombre: "Oppo A17k (Navy Blue, 3GB RAM, 64GB Storage)", precio: 94900, stock: 10, img: "/imagenes/oppoA17.jpg", idCat: "9" },
    { id: "59", nombre: "Oppo F23 5G (Cool Black, 8GB RAM, 256GB Storage)", precio: 24900, stock: 10, img: "/imagenes/oppoF23.jpg", idCat: "9" },
    { id: "60", nombre: "Oppo F21s Pro (Dawnlight Gold, 8GB RAM, 128 Storage)", precio: 21900, stock: 10, img: "/imagenes/oppoF21.jpg", idCat: "9" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos)
        }, 2000)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = misProductos.find(prod => prod.id === id);
            resolve(producto);
        }, 2000);
    })
}

// funcion que retorna toda la categoria
export const getCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productoCategoria = misProductos.filter(prod => prod.idCat === idCategoria);
            resolve(productoCategoria);
        }, 2000)
    })
}

// const enviarProductos = async (productos) => {
//     try {
//       const inventarioPro = productos.map((prod) => ({
//         id: prod.id,
//         nombre: prod.nombre,
//         precio: prod.precio,
//         stock: prod.stock,
//         img: prod.img,
//         idCat: prod.idCat,
//       }));
  
//       for (const producto of inventarioPro) {
//         await addDoc(collection(db, 'productos'), producto);
//       }
  
//       console.log('Todos los productos fueron agregados exitosamente');
//     } catch (error) {
//       console.error('Error al agregar productos:', error);
//     }
//   };
  
//   // Cargar los productos y enviarlos a la base de datos
//   enviarProductos(misProductos);
// // Cargar los productos y enviarlos a la base de datos
// getProductos()
//   .then((productos) => {
//     const inventarioPro = productos.map((prod) => ({
//       id: prod.id,
//       nombre: prod.nombre,
//       precio: prod.precio,
//       stock: prod.stock,
//       img: prod.img,
//       idCat: prod.idCat,
//     }));

//     return Promise.all(
//       inventarioPro.map((producto) =>
//         addDoc(collection(db, "productos"), producto)
//       )
//     );
//   })
//   .then(() => {
//     console.log('Todos los productos fueron agregados exitosamente');
//   })
//   .catch((error) => {
//     console.error('Error al agregar productos:', error);
//   });


