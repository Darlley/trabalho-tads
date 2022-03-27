




let myRequest = new XMLHttpRequest();
myRequest.open("GET","http://www.mocky.io/v2/5b15c4923100004a006f3c07", true);
myRequest.send()
myRequest.onreadystatechange = (item) => {
  if(myRequest.readyState == 4){

    _json = JSON.parse(myRequest.response)

    const Home = getHome(_json);
    const Pagamento = getPagamento(_json);
    const Confirmacao = getConfirmacao(_json);

    document.getElementById("root").innerHTML = Home

    // MENU
    let lista = document.querySelectorAll('.list')
    Menu(lista, Home, Pagamento, Confirmacao)

    let button = document.createElement('button')
    button.setAttribute('data-js','prox')
    button.textContent = 'Seguir para o pagamento'
    // <button data-js="prox">
    //  Seguir para o Pagamento
    // </button>
    document.querySelector('.container-result').appendChild(button)

    if(document.querySelector('.app').classList.contains('home')){
      document.querySelector('[data-js="prox"]').addEventListener('click', (e) => {
        document.getElementById("root").innerHTML = Pagamento
        document.querySelectorAll('.list')[0].classList.remove('active');
        document.querySelectorAll('.list')[1].classList.add('active');
      })
    }

  }
}


