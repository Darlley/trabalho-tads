




let myRequest = new XMLHttpRequest();
myRequest.open("GET","http://www.mocky.io/v2/5b15c4923100004a006f3c07", true);
myRequest.send()
myRequest.onreadystatechange = (item) => {
  if(myRequest.readyState == 4){

    _json = JSON.parse(myRequest.response)

    const Home = getHome(_json);
    const Pagamento = getPagamento(_json);
    let Confirmacao = getConfirmacao(_json);

    document.getElementById("root").innerHTML = Home

    // MENU
    let lista = document.querySelectorAll('.list')
    Menu(lista, Home, Pagamento, Confirmacao)

    let button = document.createElement('button')
    button.setAttribute('data-js','prox')

    
    button.textContent = 'Seguir para o pagamento'
    document.querySelector('.container-result').appendChild(button)

    document.querySelector('[data-js="prox"]').addEventListener('click', (e) => {

      if(document.querySelector('.app').classList.contains('home')){

        
        document.getElementById("root").innerHTML = Pagamento
        document.querySelectorAll('.list')[0].classList.remove('active');
        document.querySelectorAll('.list')[1].classList.add('active');
        
        button.textContent = 'Finalizar o pedido'
        document.querySelector('.container-result-pagamento').appendChild(button)

      }else if(document.querySelector('.app').classList.contains('pagamento')){

        let cardNumer = document.querySelector('[data-js="card-number"]').value
        let cardName = document.querySelector('[data-js="card-name"]').value
        let cardDate = document.querySelector('[data-js="card-date"]').value
        
        if(cardNumer && cardName && cardDate){
          Confirmacao = getConfirmacao(_json, cardNumer, cardName, cardDate);
  
          document.getElementById("root").innerHTML = Confirmacao
          document.querySelectorAll('.list')[1].classList.remove('active');
          document.querySelectorAll('.list')[2].classList.add('active');
        }
        
      }

    })
  }
}


