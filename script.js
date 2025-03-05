console.log("Я загадал число от 1 до 10. Попробуй угадать его!");
let attempts = 5;
let secret = 1 + Math.floor(Math.random() * 10);

while (attempts > 0) {
    let number = Number(prompt("Введите число: "));

    if (secret < number) {
        console.log("Моё число меньше");
        attempts--
    } else if (number < secret) {
        console.log("Моё число больше");
        attempts--
    } else {
        console.log("Ты победил")
        break
    }
    console.log("У вас осталось " + attempts + " попыток");
}