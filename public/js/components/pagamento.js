function getPagamento(json){

  return `<div class="app pagamento">

      <h2>Cartão de crédito</h2>

      <div class="container">

        <div class="inputGroup">
          <label>Numero do Cartão:</label>
          <input type="text" placeholder="____.____.____.____" data-js="card-number" maxlength="19">
        </div>

        <div class="inputGroup">
          <label>Nume do titular:</label>
          <input type="text" placeholder="Como no cartão" data-js="card-name">
        </div>

        <div class="inputGroup-2">
          <div>
            <label>Validade (mês/ano)</label>
            <input type="date" data-js="card-date" max="2022-12-31">
          </div>
          <div>
            <label>CVV</label>
            <input type="number" min="0" data-js="card-code">
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

      <div class="container-btn-02"></div>

    </div>`
}
