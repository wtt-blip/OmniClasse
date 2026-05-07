function verificar(resposta) {
    const display = document.getElementById('resultado');
    
    if (resposta === 'correto') {
        display.innerText = "🌟 Parabéns! Você acertou. A ODS 4 busca Educação de Qualidade para todos.";
        display.style.color = "#27ae60";
    } else {
        display.innerText = "❌ Quase lá! Tente novamente. Dica: foca no aprendizado!";
        display.style.color = "#e74c3c";
    }
}