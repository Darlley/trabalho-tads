



function getPagamento(json){

  return `<div class="app pagamento">

      <h2>Cartão de crédito</h2>

      <div class="container">

        <div class="inputGroup">
          <label>Numero do Cartão:</label>
          <input type="text" placeholder="____.____.____.____">
        </div>

        <div class="inputGroup">
          <label>Numero do titular:</label>
          <input type="text" placeholder="Como no cartão">
        </div>

        <div class="inputGroup-2">
          <div>
            <label>Validade (mês/ano)</label>
            <input type="date">
          </div>
          <div>
            <label>CVV</label>
            <input type="number" min="0" max="999">
          </div>
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
