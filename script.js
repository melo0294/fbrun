
  function calculateResults() {
    // Captura os valores inseridos pelo usuário
    const weight = parseFloat(document.getElementById('weight').value);
    const pace = parseFloat(document.getElementById('pace').value);
    const time = parseFloat(document.getElementById('time').value);
    const effort = parseInt(document.getElementById('effort').value);

    //Calcula a velocidade em km/h
    const velocity = 60 / pace;

    // Calcula o gasto calórico médio
    const calories = calculateCalories(velocity, weight, time);

    // Calcula o tempo de repouso sugerido
    const restTime = calculateRestTime(effort);

    // Exibe os resultados na página
    displayResults(calories, restTime);
}

function calculateCalories(velocity, weight, time) {
    // Fórmula para o gasto calórico
    const caloriesPerMinute = velocity * weight * 0.0175;
    return Math.round(caloriesPerMinute * time);
}

function calculateRestTime(effort) {
    // Lógica simples para sugerir tempo de repouso
    if (effort >= 8) {
        return ('24-48'); // 1-2 dias de repouso sugeridos
    } else if (effort >= 6) {
        return ('24'); // Mínimo de 1 dia de repouso sugerido
    } else {
        return ('0-24'); // 0-1 dia de repouso sugerido
    }
}

function displayResults(calories, restTime) {
    // Exibe a seção de resultados
    document.getElementById('resultSection').style.display = 'block';

    // Exibe os resultados na página
    document.getElementById('caloriesValue').textContent = calories;
    document.getElementById('restTimeValue').textContent = restTime;
}


  
