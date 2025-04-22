const stockProductos = [
    {
        id: 1,
        img: "../img/amd/radeon-rx550-02gb-asrock-phantom-gddr5.jpg",
        marca: "amd",
        nombre: "RX550 Asrock 2gb",
        precio: "210000" ,
        stock: "5"
    },
    {
        id: 2,
        img: "../img/amd/radeon-rx6400-4gb-asrock-challenger.jpg",
        marca: "amd",
        nombre: "RX6400 Asrock 4gb",
        precio: "250000" ,
        stock: "4"
    },
    {
        id: 3,
        img: "../img/amd/radeon-rx6500xt-4gb-asrock-phantom-oc.jpg",
        marca: "amd",
        nombre: "RX6500XT Asrock 4gb",
        precio: "265000" ,
        stock: "5"
    },
    {
        id: 4,
        img: "../img/amd/radeon-rx7600-8gb-asus-dualv2-ocedition.jpg",
        marca: "amd",
        nombre: "RX7600 Asus 8gb",
        precio: "290000" ,
        stock: "5"
    },
    {
        id: 5,
        img: "../img/amd/radeon-rx7600-8gb-gigabyte-oc.jpg",
        marca: "amd",
        nombre: "RX7600 gigabyte 8gb",
        precio: "290000" ,
        stock: "5"
    },
    {
        id: 6,
        img: "../img/amd/radeon-rx7700xt-12gb-sapphire-pulse.jpg",
        marca: "amd",
        nombre: "RX7700XT Sapphire Pulse 12gb",
        precio: "340000" ,
        stock: "5"
    },
    {
        id: 7,
        img: "../img/amd/radeon-rx7900xt-20gb-sapphirepulse.jpg",
        marca: "amd",
        nombre: "RX7900XT Sapphire Pulse 20gb",
        precio: "500000" ,
        stock: "5"
    },
]

class NuevoProducto {
    constructor (id, img, marca, nombre, precio, stock){
        this.id = id;
        this.img = img;
        this.marca = marca;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
  }

function nuevoProducto(id, img, marca, nombre, precio, stock){
    const producto = new NuevoProducto(id, img, marca, nombre, precio, stock); 
    stockProductos.push(producto);
}

nuevoProducto(8,"../img/nvidia/GEFORCE GT 210 MSI 1GB DDR3.jpg","nvidia","GEFORCE GT210 MSI 1GB",110000,2);
nuevoProducto(9,"../img/nvidia/geforce-gt730-2gb-asus-gddr5.jpg","nvidia","GEFORCE GT730 ASUS 2GB",140000,3);
nuevoProducto(10,"../img/nvidia/geforce-gtx1630-4gb-zotac-gddr6.jpg","nvidia","GEFORCE GTX1630 ZOTAC 4GB",180000,6);
nuevoProducto(11,"../img/nvidia/geforce-rtx-4060-8gb-asus-proart-oc-3x-0.jpg","nvidia","GEFORCE RTX4060 ASUS 8GB",250000,10);
nuevoProducto(12,"../img/nvidia/geforce-rtx4060ti-8gb-asus-dual-oc-edition-0.jpg","nvidia","GEFORCE RTX4060TI ASUS 8GB",270000,4);
nuevoProducto(13,"../img/nvidia/geforce-rtx4070super-12gb-asus-dual-white-oc-edition-0.jpg","nvidia","GEFORCE RTX4070SUPER ASUS 12GB",500000,2);
nuevoProducto(14,"../img/nvidia/geforce-rtx4070tisuper-16gb-gigabyte-windforce-max-oc-0.jpg","nvidia","GEFORCE RTX4070TI SUPER GIGABYTE 16GB",650000,2);
nuevoProducto(15,"../img/nvidia/geforce-rtx4080super-16g-msi-ventus-3x-oc-0.jpg","nvidia","GEFORCE RTX4080SUPER MSI 16GB",850000,4);

const contenedorProductos = document.getElementById("contenedor-productos");

let total = 0;
const carrito = [];

stockProductos.forEach((elm)=>{
    const div = document.createElement("div")
    div.classList.add("producto")
    div.innerHTML = `
        <img src="${elm.img}">
        <hr>
        <h3>${elm.nombre}</h3>
        <p>Precio: $${elm.precio}</p>
        <input type="number" class="cantidad" min="1" value="1">
        <button class="comprar">Comprar</buttor>
        `
    const button = div.querySelector(".comprar");
    button.addEventListener("click", ()=>{
    const cantidad = parseInt(div.querySelector(".cantidad").value);
    total = total += elm.precio * cantidad;
    carrito.push({nombre: elm.nombre, precio: elm.precio, cantidad: cantidad })
    actualizarCarrito();
    actualizarCantidadCarrito();
} )    
    contenedorProductos.appendChild(div)

})

function actualizarCarrito() {
    const contenedorCarrito = document.querySelector("#carrito");
    contenedorCarrito.innerHTML = "";  // Limpiar el contenido del carrito

    carrito.forEach((producto) => {
        const div = document.createElement("div");
        div.classList.add("producto-carrito");
        div.innerHTML = `
            <h3>${producto.nombre}</h3>
            <p>Precio: $${producto.precio}</p>
            <p>Cantidad: ${producto.cantidad}</p>
            <p>Total: $${producto.precio * producto.cantidad}</p>
        `;
        contenedorCarrito.appendChild(div);
    });

    const totalDiv = document.createElement("div");
    totalDiv.classList.add("total-carrito");
    totalDiv.innerHTML = `<h3>Total: $${total}</h3>`;
    contenedorCarrito.appendChild(totalDiv);
}
    
function actualizarCantidadCarrito() {
    const cantidadCarrito = carrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    document.querySelector("#cantidadCarrito").textContent = cantidadCarrito;
}   