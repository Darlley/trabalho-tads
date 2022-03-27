function getHome(json) {

  let containerProducts = '';

  json.items.forEach((item) => {

    containerProducts += `<div class="produto">
        <div class="produto-container-1">
            <img src=${item.product.imageObjects[0].thumbnail}>
        </div>
        <div class="produto-container-2">
            <div class="product-name">${item.product.name}</div>
            <div class="price">R$ ${(item.product.priceSpecification.price).toFixed(2)}</div>
        </div>
      </div>`

  })

  return `<div class="app home">

      <h2>Produtos</h2>

      <div class="container">

        ${containerProducts}

      </div>

      <div class="container-result">
        <div>
            <span>Produtos</span>
            <span>R$ ${(json.subTotal).toFixed(2)}</span>
        </div>

        <div>
            <span>Frete</span>
            <span>R$ ${(json.shippingTotal).toFixed(2)}</span>
        </div>

        <div class="desconto">
            <span>Desconto</span>
            <span>R$ -${(json.discount).toFixed(2)}</span>
        </div>

        <div class="total">
            <span><strong>Total</strong></span>
            <span>R$ ${(json.total).toFixed(2)}</span>
        </div>

      </div>

    </div>`
}
