let feedbackPositivo = 1;
let feedbackNegativo = 1;
const Cookies = require('js-cookie');


document.addEventListener("DOMContentLoaded", function() {
    // Verifica se já existem contadores armazenados nos cookies
    if(Cookies.get('feedbackPositivo') !== undefined && Cookies.get('feedbackNegativo') !== undefined) {
        feedbackPositivo = parseInt(Cookies.get('feedbackPositivo'));
        feedbackNegativo = parseInt(Cookies.get('feedbackNegativo'));
        atualizarContadores();
    }
    
    // Função para atualizar os contadores de feedbacks positivos e negativos
    function atualizarContadores() {
        document.getElementById('contadorPositivo').textContent = feedbackPositivo;
        document.getElementById('contadorNegativo').textContent = feedbackNegativo;
    }

    // Função para atualizar o resultado
    function atualizarResultado(gostei) {
        const resultadoDiv = document.querySelector('.avaliacoes__resultado');
        
        if (gostei) {
            resultadoDiv.textContent = 'Obrigado pelo seu feedback positivo! :)';
            feedbackPositivo++;
        } else {
            resultadoDiv.textContent = 'Lamento que você não tenha gostado da experiência. :(';
            feedbackNegativo++;
        }

        // Atualiza os contadores de feedbacks positivos e negativos
        atualizarContadores();

        // Armazena os contadores nos cookies
        Cookies.set('feedbackPositivo', feedbackPositivo, { expires: 7 });
        Cookies.set('feedbackNegativo', feedbackNegativo, { expires: 7 });
    }

    // Adiciona event listener para o botão "Gostei"
    document.getElementById('gostei').addEventListener('click', function() {
        atualizarResultado(true);
    });

    // Adiciona event listener para o botão "Não Gostei"
    document.getElementById('nao_gostei').addEventListener('click', function() {
        atualizarResultado(false);
    });

});
