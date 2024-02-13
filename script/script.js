let feedbackPositivo = 1;
let feedbackNegativo = 1;

document.addEventListener("DOMContentLoaded", function() {
    // Verifica se já existem contadores armazenados no localStorage
    if(localStorage.getItem('feedbackPositivo') !== null && localStorage.getItem('feedbackNegativo') !== null) {
        feedbackPositivo = parseInt(localStorage.getItem('feedbackPositivo'));
        feedbackNegativo = parseInt(localStorage.getItem('feedbackNegativo'));
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
        const btnEnvio = document.getElementById('envio');
        
        if (gostei) {
            resultadoDiv.textContent = 'Obrigado pelo seu feedback positivo! :)';
            feedbackPositivo++;
        } else {
            resultadoDiv.textContent = 'Lamentamos que você não tenha gostado da experiência. :(';
            feedbackNegativo++;
        }


        // Atualiza os contadores de feedbacks positivos e negativos
        atualizarContadores();

        // Armazena os contadores no localStorage
        localStorage.setItem('feedbackPositivo', feedbackPositivo);
        localStorage.setItem('feedbackNegativo', feedbackNegativo);
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
