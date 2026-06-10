// CONTADORES ANIMADOS

function animarNumero(id, valorFinal){

    let valor = 0;

    const elemento = document.getElementById(id);

    const intervalo = setInterval(() => {

        valor++;

        elemento.innerHTML = valor + "%";

        if(valor >= valorFinal){

            clearInterval(intervalo);
        }

    }, 25);

}

// OBSERVER PARA ANIMAÇÕES

const observador = new IntersectionObserver((entradas)=>{

    entradas.forEach((entrada)=>{

        if(entrada.isIntersecting){

            entrada.target.classList.add("mostrar");

        }

    });

},
{
    threshold:0.2
});

// OBSERVAR SEÇÕES

document.querySelectorAll(".secao").forEach(secao=>{

    observador.observe(secao);

});

document.querySelectorAll(".card").forEach(card=>{

    observador.observe(card);

});

// INICIAR CONTADORES AO ENTRAR NA TELA

let contadoresIniciados = false;

window.addEventListener("scroll", ()=>{

    const estatisticas =
    document.querySelector(".estatisticas");

    const posicao =
    estatisticas.getBoundingClientRect().top;

    if(posicao < window.innerHeight && !contadoresIniciados){

        contadoresIniciados = true;

        animarNumero("aguaNum", 70);
        animarNumero("soloNum", 85);
        animarNumero("tecNum", 90);

    }

});

// EFEITO NA GALERIA

document.querySelectorAll(".grid img").forEach(imagem=>{

    imagem.addEventListener("click", ()=>{

        imagem.classList.toggle("ampliada");

    });

});

// MENSAGEM DE BOAS-VINDAS

window.onload = ()=>{

    console.log(
        "Portal Agro Sustentável carregado com sucesso!"
    );

};
