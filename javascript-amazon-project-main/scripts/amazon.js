import {carrito} from '../data/carrito.js'
//mostrar los productos
let prHtml="";
products.forEach((producto)=>{
  const textoProductos=`<div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${producto.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${producto.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${producto.rating.stars*10}.png">
            <div class="product-rating-count link-primary">
              ${producto.rating.count}
            </div>
          </div>

          <div class="product-price">
            ${(producto.priceCents/100).toFixed(2)}
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary" data-id-producto="${producto.id}">
            Add to Cart
          </button>
        </div>`;
        prHtml+=textoProductos
});
document.querySelector(".products-grid").innerHTML=prHtml

//sumar al carrito
var sumaCarrito=0;
document.querySelectorAll(".add-to-cart-button").forEach((button)=>{
    button.addEventListener('click',()=>{
        var idPr=button.dataset.idProducto 
        var cantidadPr=1
        var articuloMatch;

        carrito.forEach((item)=>{
            if(item.idProducto===idPr){
                articuloMatch=item;  
            }
        })
        
        if(articuloMatch){
            articuloMatch.cantidadProducto+=1;
            sumaCarrito++;
        }else{
            carrito.push(
                {
                    idProducto: idPr,
                    cantidadProducto:cantidadPr
                }
            )
            sumaCarrito++;
        }
        
        document.querySelector(".cart-quantity").innerHTML=sumaCarrito;
        
    })
})