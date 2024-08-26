import { useState } from 'react';

import Question from './Question';

import QUESTIONS from '@/data/questions.json';

const questions = QUESTIONS;

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: boolean }>({});

  const handleAnswer = (answer: boolean) => {
    setAnswers({ ...answers, [currentQuestion]: answer });
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // 결과 계산 로직 실행
      // 예: const result = calculateResult(answers);
      console.log('Quiz Finished', answers);
    }
  };

  return (
    <div className='max-w-xl mx-auto mt-10'>
      {currentQuestion < questions.length ? (
        <Question questionText={questions[currentQuestion].text} onAnswer={handleAnswer} />
      ) : (
        <div>결과가 여기에 표시됩니다.</div>
      )}
    </div>
  );
};

export default Quiz;
