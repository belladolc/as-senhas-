document.getElementById('checkBtn').addEventListener('click', function() {
    const password = document.getElementById('passwordInput').value.trim().toLowerCase();
    const resultDiv = document.getElementById('resultMessage');

    // Lista de senhas absurdas comuns para teste
    const senhasAbsurdas = [
        '123456', '123456789', 'password', 'senha', 'qwerty', 
        '111111', 'abc123', 'admin', 'iloveyou', 'fluminense', 
        'corinthians', 'flamengo', 'mudar123'
    ];

    if (password === "") {
        resultDiv.style.color = "#ffa502";
        resultDiv.innerHTML = "⚠️ Por favor, digite alguma senha para testar!";
        return;
    }

    // Verifica se a senha está na lista negra
    if (senhasAbsurdas.includes(password)) {
        resultDiv.style.color = "#ff4757";
        resultDiv.innerHTML = `❌ ABSURDO! A senha "${password}" é uma das mais hackeadas do mundo! Mude isso imediatamente! 😱`;
    } else if (password.length < 6) {
        resultDiv.style.color = "#ffa502";
        resultDiv.innerHTML = "⚠️ Muito curta! Mesmo que não seja óbvia, robôs descobrem senhas pequenas em segundos.";
    } else {
        resultDiv.style.color = "#2ed573";
        resultDiv.innerHTML = "✅ Parece melhor! Mas lembre-se de nunca usar dados óbvios como seu nome ou aniversário.";
    }
});
