


const deposit = 5750; // Сума вкладу в доларах США
const interestRate = 0.05; // Процентна ставка депозиту (5%)
const months = 2; // Кількість місяців

// Обчислюємо прибуток від вкладу
const profit = deposit * interestRate * months / 12;

console.log(`Прибуток від вкладу на ${months} місяці з процентною ставкою ${interestRate * 100}% річних становить ${profit} доларів США.`);
