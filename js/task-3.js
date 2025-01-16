function filterArray(numbers, value) {
  const result = []; // Ініціалізуємо порожній масив

  for (const number of numbers) {
    // Перебираємо елементи масиву
    if (number > value) {
      // Якщо число більше за value
      result.push(number); // Додаємо до результату
    }
  }

  return result; // Повертаємо новий масив
}

// Тестування:
console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
