function checkAnswer() {
    const correctAnswer = '4';
    const quiz = document.querySelector('input[name="quiz"]:checked');
    const userAnswer = quiz.value;
    const feedback = document.getElementById('feedback');

    if (userAnswer == correctAnswer ) {
        feedback.textContent = 'Correct! Well done.';
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
    
}
const submit = document.getElementById('submit-answer');
submit.addEventListener('click', checkAnswer);
    
