// Приветственное сообщение в консоль
console.log('Привет из SMART учебника!');

// Ожидание полной загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM полностью загружен!');
    alert('Добро пожаловать в SMART Учебник!');
});

/**
 * Функция для переключения аккордеона
 * @param {string} contentId - ID элемента, который нужно показать/скрыть
 */
function toggleAccordion(contentId) {
    const content = document.getElementById(contentId);
    if (!content) {
        console.error(`Элемент с ID "${contentId}" не найден.`);
        return;
    }

    // Переключаем класс 'open'
    content.classList.toggle('open');
}