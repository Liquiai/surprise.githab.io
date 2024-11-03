document.getElementById('createCard').addEventListener('click', function() {
    const cardType = document.getElementById('cardType').value;
    const card = document.getElementById('card');
    const cardImage = document.getElementById('cardImage');
    const riddle = document.getElementById('riddle');
    let imageUrl = '';

   switch (cardType) {
    case 'love':
        imageUrl = './img/12.png'; // Убедитесь, что файл существует
        break;
    case 'friendship':
        imageUrl = './img/123.png';
        break;
    case 'birthday':
        imageUrl = './img/1234.png';
        break;
    default:
        alert('НЕ ТУДА!!!.');
        return;
}
    cardImage.src = imageUrl;
    cardImage.style.display = 'block';
    card.style.display = 'block';
    riddle.style.display = 'block'; 
});

document.getElementById('submitAnswer').addEventListener('click', function() {
    const answer = document.getElementById('riddleAnswer').value.toLowerCase();
    const correctAnswer = 'воздух'; 

    if (answer === correctAnswer) {
        alert('Какая молодец!!!.');
        document.getElementById('cardImage').style.display = 'block'; 
    } else {
        alert('Ну не)');
    }
});
