import React, { useState } from "react";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState();

  const questions = [
    {
      question: "Qual a capital do Brasil?",
      options: [
        { answer: "São Paulo", isCorrect: false },
        { answer: "Rio de Janeiro", isCorrect: false },
        { answer: "Brasília", isCorrect: true },
        { answer: "Belo Horizonte", isCorrect: false },
      ],
      correctAnswer: 2,
      index: 0,
    },
    {
      question: "Quantos alienígenas o Ben 10 criança pode virar?",
      options: [
        { answer: "10", isCorrect: true },
        { answer: "5", isCorrect: false },
        { answer: "15", isCorrect: false },
        { answer: "20", isCorrect: false },
      ],
      correctAnswer: 0,
      index: 1,
    },
    {
      question: "Qual a melhor princesa?",
      options: [
        { answer: "Tiana", isCorrect: false },
        { answer: "Jasmine", isCorrect: false },
        { answer: "Ariel", isCorrect: false },
        { answer: "Rapunzel", isCorrect: true },
      ],
      correctAnswer: 3,
      index: 2,
    },
    {
      question: "Qual o gênio mais forte?",
      options: [
        { answer: "O do Alladin", isCorrect: true },
        { answer: "O do Habibs", isCorrect: false },
        { answer: "O do Chamyto", isCorrect: false },
      ],
      correctAnswer: 0,
      index: 3,
    },
  ];

  function handleAnswer(isCorrect) {
    if (isCorrect) return setSelectedAnswer(true);

    setSelectedAnswer(false);
  }

  function handleNextQuestion() {
    if (selectedAnswer == undefined) return alert("Nenhuma opção escolhida");
    if (selectedAnswer) setCorrectAnswers(correctAnswers + 1);

    setCurrentQuestion(currentQuestion + 1);
    setSelectedAnswer();
  }

  function renderQuiz() {
    return (
      <div>
        <h2>{questions[currentQuestion].question}</h2>
        <div>
          {questions[currentQuestion].options.map((option) => {
            return (
              <button onClick={() => handleAnswer(option.isCorrect)}>
                {option.answer}
              </button>
            );
          })}
        </div>
        <button onClick={handleNextQuestion}>Próximo</button>
      </div>
    );
  }

  function renderFinal() {
    return <h2>Você acertou {correctAnswers}</h2>;
  }

  function handleRenderQuiz() {
    if (questions[currentQuestion]) return renderQuiz();
    return renderFinal();
  }

  return (
    <div class="centralizar">
      <h1>Quiz</h1>
      {handleRenderQuiz()}
    </div>
  );
}

export default Quiz;
