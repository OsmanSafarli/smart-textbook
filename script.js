function openSubtopic(url) {
    window.open(url, '_blank'); // Открывает новое окно/вкладку
}
// Аккордеон
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const item = header.parentElement;
        item.classList.toggle('open');

        // Закрываем другие открытые элементы
        document.querySelectorAll('.accordion-item').forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('open');
            }
        });
    });
});
// Проверка задания 1: Какие формы современных денег вы знаете?
function checkTask1() {
    const checkboxes = document.querySelectorAll('input[name="money-forms"]:checked');
    const selectedValues = Array.from(checkboxes).map(checkbox => checkbox.value);
    const correctAnswers = ['cash', 'non-cash', 'digital'];
    const resultElement = document.getElementById('money-forms-result');

    if (selectedValues.length !== correctAnswers.length || !correctAnswers.every(value => selectedValues.includes(value))) {
        resultElement.textContent = 'Неверно! Правильные ответы: a) Наличные деньги, b) Безналичные деньги, c) Цифровые деньги.';
        resultElement.style.color = 'red';
    } else {
        resultElement.textContent = 'Правильно!';
        resultElement.style.color = 'green';
    }
}

// Проверка задания 2: Расчет покупки иностранной валюты
function checkTask2() {
    const answer = parseFloat(document.getElementById('currency-exchange-answer').value);
    const officialRate = 13.61; // Официальный курс юаня
    const markupRate = 0.05; // Надбавка банка (5%)
    const amountCNY = 5000; // Количество юаней
    const correctAnswer = amountCNY * (officialRate * (1 + markupRate)); // 5000 * (13.61 * 1.05)

    const resultElement = document.getElementById('currency-exchange-result');
    if (!isNaN(answer) && Math.abs(answer - correctAnswer) < 0.01) {
        resultElement.textContent = 'Правильно!';
        resultElement.style.color = 'green';
    } else {
        resultElement.textContent = `Неверно! Правильный ответ: ${correctAnswer.toFixed(2)} рублей.`;
        resultElement.style.color = 'red';
    }
}

// Проверка задания 3: Что такое спред?
function checkTask3() {
    const selectedValue = document.querySelector('input[name="spread"]:checked')?.value;
    const correctAnswer = 'a'; // Разница между курсом покупки и продажи валюты
    const resultElement = document.getElementById('spread-result');

    if (selectedValue === correctAnswer) {
        resultElement.textContent = 'Правильно!';
        resultElement.style.color = 'green';
    } else {
        resultElement.textContent = 'Неверно! Правильный ответ: a) Разница между курсом покупки и продажи валюты.';
        resultElement.style.color = 'red';
    }
}