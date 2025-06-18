function checkAnswer() {
    const correctAnswer = '4';
    const quiz = document.querySelector('quiz');
    const userAnswer = quiz.value;
    const feedback = document.getElementById('feedback');

    if (userAnswer == correctAnswer ) {
        feedback.textContent = 'Correct! Well done';
    } else {
        feedback.textContent = "That's incorrect. try again";
    }
    
}
const sumbit = document.getElementById('sumbit-answer');
    sumbit.addEventListener('click', checkAnswer)