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

                document.querySelector('[data-js="card-number"]').addEventListener('input', e => {
                    e.target.value = e.target.value
                      .replace(/\D/g,'')
                      .replace(/(\d{4})(\d)/,'$1.$2')
                      .replace(/(\d{4})(\d)/,'$1.$2')
                      .replace(/(\d{4})(\d)/,'$1.$2')
                      .replace(/(\d{4})(\d)/,'$1.$2')
                      .replace(/(-\d{2})\d+?$/,'$1')
                })
        
                document.querySelector('[data-js="card-code"]').addEventListener('input', e => { 
                e.target.value = e.target.value.replace(/^\d{4}$/) 
                })

            }else if(event.target.textContent === "Pagamento"){

                document.getElementById("root").innerHTML = Pagamento

                let cardNumber = document.querySelector('[data-js="card-number"]').value
                let cardName = document.querySelector('[data-js="card-name"]').value
                let cardDate = document.querySelector('[data-js="card-date"]').value
                
                if(cardNumber && cardName && cardDate){
                Confirmacao = getConfirmacao(_json, cardNumber, cardName, cardDate);
        
                document.getElementById("root").innerHTML = Confirmacao
                document.querySelectorAll('.list')[1].classList.remove('active');
                document.querySelectorAll('.list')[2].classList.add('active');
                }

            }else if(event.target.textContent === "Confirmação"){

                document.getElementById("root").innerHTML = Confirmacao

            }
        })
    })
}
