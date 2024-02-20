function generateEmailFromPrompt() {
    const lastName = prompt("Введите вашу фамилию");
    const firstName = prompt("Введите ваше имя");
    const domain = "gmail.com";
    const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${domain}`;
    return email;
}

function generateRandomEmailId(length) {
    const characters = '0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

let generatedEmail = generateEmailFromPrompt();
console.log("Готовый вариант электронной почты:", generatedEmail);

let randomEmailId = generateRandomEmailId(8);
console.log("Случайный email ID:", randomEmailId);


