function getConfirmacao(json, cardNumber, cardName, cardDate){

    let containerProducts = '';
    json.items.forEach((item) => {
        containerProducts += `<div class="produto">
            <div class="produto-container-1">
                <img src=${item.product.imageObjects[0].thumbnail}>
            </div>
            <div class="produto-container-2">
                <div class="product-name">${item.product.name}</div>
            </div>
        </div>`
    })

    return `<div class="app confirmacao">
        <div class="confirmacao-check">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
            </svg>
            <h1>Compra efetuada com sucesso</h1>
        </div>
        <h2>Pagamento</h2>
        <div class="confirmacao-header">

            <div>
                <p>${cardNumber}</p>
                <p>${cardName}</p>
                <p>${cardDate}</p>
            </div>
        </div>
        <div class="confirmacao-container">
            <h2>Produtos</h2>

            <div class="container">
                ${containerProducts}
            </div>
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