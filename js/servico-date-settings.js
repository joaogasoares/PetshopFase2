// Adiciona um listener para o evento 'DOMContentLoaded', que é disparado quando o HTML foi completamente carregado e analisado, mas antes de carregar todos os estilos, imagens e subframes.
document.addEventListener('DOMContentLoaded', function() {
    // Função callback a ser executada quando o evento 'DOMContentLoaded' é disparado

    let today = new Date();
    // Cria um objeto Date representando a data e hora atuais

    let maxDate = new Date();
    // Cria um novo objeto Date com a data atual

    maxDate.setMonth(today.getMonth() + 6);
    // Define o mês do objeto maxDate para 6 meses à frente da data atual

    let dateInput = document.getElementById('data');
    // Obtém o elemento de entrada de data do DOM pelo ID 'data'

    dateInput.min = today.toISOString().split('T')[0];
    // Define o atributo 'min' do campo de entrada de data para a data atual, formatada como 'YYYY-MM-DD'

    dateInput.max = maxDate.toISOString().split('T')[0];
    // Define o atributo 'max' do campo de entrada de data para a data máxima permitida (6 meses a partir de hoje), formatada como 'YYYY-MM-DD'
});
