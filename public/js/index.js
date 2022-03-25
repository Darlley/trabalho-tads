const Home = getHome();
const Pagamento = getPagamento();
const Confirmacao = getConfirmacao();

document.getElementById("root").innerHTML = Home

// MENU 
let lista = document.querySelectorAll('.list')
Menu(lista)

// ENDPOINT
// http://www.mocky.io/v2/5b15c4923100004a006f3c07