const quizes = [
  {
    id: 1,
    question: '1 + 1 = ?',
    answers: [1, 2, 3, 4],
  },
  {
    id: 2,
    question: '2 + 2 = ?',
    answers: [2, 3, 4, 5],
  },
  {
    id: 3,
    question: '3 + 3 = ?',
    answers: [3, 4, 5, 6],
  },
  {
    id: 4,
    question: '4 + 4 = ?',
    answers: [6, 7, 8, 9],
  },
  {
    id: 5,
    question: '5 + 5 = ?',
    answers: [8, 9, 10, 11],
  },
];

const quizContainer = document.createElement('div');
quizContainer.classList.add('quiz-container');

document.body.insertBefore(quizContainer, document.querySelector('script'));

quizes.forEach((quiz) => {
  const quizItem = document.createElement('div');
  quizItem.classList.add('quiz-item');

  const question = document.createElement('h3');
  question.textContent = `Câu ${quiz.id} : ${quiz.question}`;
  quizItem.appendChild(question);

  const quizAnswer = document.createElement('div');
  quizAnswer.classList.add('quiz-answer');

  quiz.answers.forEach((answer) => {
    const answerItem = document.createElement('div');
    answerItem.classList.add('quiz-answer-item');

    const input = document.createElement('input');
    input.type = 'radio';
    input.name = quiz.id;
    input.value = answer;

    const label = document.createElement('label');
    label.textContent = answer;

    answerItem.appendChild(input);
    answerItem.appendChild(label);
    quizAnswer.appendChild(answerItem);
  });

  quizItem.appendChild(quizAnswer);
  quizContainer.appendChild(quizItem);
});

const randomButton = document.getElementById('btn');
randomButton.addEventListener('click', () => {
  quizes.forEach((quiz) => {
    const answers = document.getElementsByName(quiz.id);
    const randomIndex = Math.floor(Math.random() * answers.length);
    answers[randomIndex].checked = true;
  });
});
