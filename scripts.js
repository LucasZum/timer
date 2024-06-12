// Defina as datas importantes no formato ISO (ano-mês-dia)
const dates = {
    '2024-06-11': {
        message: 'Feliz Dia dos Namorados!',
        password: 'amor'
    }
    // Adicione outras datas importantes aqui
};

// let nextDateKey = null;

// Encontre a próxima data importante
const findNextDate = () => {
    const now = new Date();
    for (const date in dates) {
        const targetDate = new Date(date + 'T00:00:00'); // Certifique-se de definir a data no início do dia
        if (targetDate > now) {
            nextDateKey = date;
            console.log(targetDate);
            return targetDate;
        }
    }
    return null;
};

const countdownElement = document.getElementById('timer');
const passwordSection = document.getElementById('password-section');
const contentElement = document.getElementById('content');
const messageElement = document.getElementById('message');
const contador_section = document.getElementById('contador');
const proxima = document.getElementById('proxima');

const targetDate = findNextDate();

if (targetDate) {
    const updateCountdown = () => {
        const now = new Date();
        const difference = targetDate - now;

        if (difference <= 0 && now.toDateString() === targetDate.toDateString()) {
            clearInterval(interval);

        } else if (difference <= 0) {
            clearInterval(interval);
            countdownElement.innerHTML = 'O evento já passou.';
        } else {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }
    };

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown();
} else {
    countdownElement.style.display = 'none';
    passwordSection.style.display = 'block';
}

const checkPassword = () => {
    const inputPassword = document.getElementById('password').value;
    console.log(dates);
    if (inputPassword === dates['2024-06-11'].password) {
        // Ocultar tudo exceto a mensagem
        contador_section.style.display = 'none'
        proxima.classList.add('hidden')
        contentElement.classList.remove('hidden')
        contentElement.style.display = 'block';
    } else {
        alert('Senha incorreta. Tente novamente.');
    }
};


const render_cronometro = () => {
    contentElement.style.display = 'none'
    proxima.style.display = 'flex'
    proxima.classList.remove('hidden')

}
