
let productos = [
    { id: '1' ,categoria: 'Formal', nombre: "Beige", precio: 51000, stock: 4,  imagen: 'https://d1fufvy4xao6k9.cloudfront.net/feed/img/man_suit2/7515/6.webp'},
    { id: '2' ,categoria: 'Formal', nombre: "Navy Blue", precio: 47500, stock: 8,  imagen: 'https://d1fufvy4xao6k9.cloudfront.net/images/landing/hockerty/home/main_products_block/1.Suits.webp'},
    { id: '3' ,categoria: 'Casual', nombre: "Bussiness Black", precio: 46000, stock: 10,  imagen: 'https://d1fufvy4xao6k9.cloudfront.net/feed/img/man_suit2/21374/17.webp'},
    { id: '4' ,categoria: 'Casual', nombre: "Maroon", precio: 48000, stock: 3,  imagen: 'https://d1fufvy4xao6k9.cloudfront.net/feed/img/man_suit2/85159/8%20-%20copia.webp'}, 
];



export const gFetch= (id) => {
    return new Promise( ( resolve, reject ) => { // try catch
        

        if (id) {
            setTimeout(()=>{
                resolve(productos.find( producto => producto.id === id ));
            }, 2000 )
        } else {
            reject('Ocurrio un Error')
            setTimeout(()=>{
                resolve(productos);
            }, 2000 )
        }
    })
}
