// LINKANDO FORM POR ID
const form = document.getElementById('form');

form.addEventListener('submit', function (event) {
    // NÃO ATUALIZA A PÁGINA QAUNDO CLICA NO FORMULÁRIO DE ENVIAR
    event.preventDefault();

    // PEGANDO OS VALORES POR ID
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    // SOMA DO PESO E ALTURA
    const bmi = (weight / (height * height)).toFixed(2);

    // PODER ADICIONAR VÁRIOS VALORES
    const value = document.getElementById('value');
    let description = '';

    // FAZER COM QUE OS VALORES DO PESO APAREÇAM (SOMA FINAL)
    document.getElementById('infos').classList.remove('hidden');

    // CONDIÇÕES
    if (bmi < 16.9) {
        description = 'Cuidado! Você está muito abaixo do peso!'
    } else if (bmi >= 17 && bmi <= 18.4) {
        description = 'Cuidado! Você está abaixo do peso!'
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        description = 'Peso normal!'
    } else if (bmi >= 25 && bmi <= 29.9) {
        description = 'Cuidado! Você está acima do peso!'
    } else if (bmi >= 30 && bmi <= 34.9) {
        description = 'OBESIDADE GRAU I!'
    } else if (bmi >= 35 && bmi <= 40) {
        description = 'OBESIDADE GRAU II!'
    } else {
        description = 'OBESIDADE GRAU III!'
    }

    // TROCAR O VALOR DE PONTO PELA VÍRGULA
    value.textContent = bmi.replace('.', ',');
    document.getElementById('description').textContent = description;
})
