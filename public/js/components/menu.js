function Menu(lista, Home, Pagamento, Confirmacao){
    lista.forEach((pagina)=>{
        pagina.addEventListener('click', (event) =>{

            lista.forEach((item) => {
                if(item.classList.contains('active')){
                    item.classList.remove('active');
                }
            })

            event.target.classList.add('active');

            if(event.target.textContent === "Sacola"){

                document.getElementById("root").innerHTML = Home

            }else if(event.target.textContent === "Pagamento"){

                document.getElementById("root").innerHTML = Pagamento

            }else if(event.target.textContent === "Confirmação"){

                document.getElementById("root").innerHTML = Confirmacao

            }
        })
    })
}
