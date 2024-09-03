import React, { useState } from 'react';

import Question from '@/components/quiz/question';
import Result from '@/components/quiz/result';
import QUESTIONS from '@/data/DB_QUESTIONS.json';
import { calculateFinalResult } from '@/utils/calculateResult';

const questions = QUESTIONS;

const Quiz = () => {
  const [quizResult, setQuizResult] = useState<IQuizResult>({ answers: [] });
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentPercentage, setCurrentPercentage] = useState<number>(0);
  const [finalResult, setFinalResult] = useState<IPersonalityTypeScores | null>(null);

  const updateQuizResult = (questionId: number, scaleValue: IScaleValue, quizResult: IQuizResult) => {
    return {
      answers: [...quizResult.answers, { questionId, scale: scaleValue }],
    };
  };

  const calculatePercentage = (currentIndex: number, totalQuestions: number) => {
    const rawPercentage = ((currentIndex + 1) / totalQuestions) * 100;
    const adjustedPercentage = Math.round(rawPercentage * 10) / 10;
    return adjustedPercentage === 50 ? 50.1 : adjustedPercentage;
  };

  const moveToNextQuestion = (newIndex: number, percentage: number) => {
    setCurrentQuestionIndex(newIndex);
    setCurrentPercentage(percentage);
  };

  const handleAnswer = (questionId: number, scaleValue: IScaleValue) => {
    const updatedQuizResult = updateQuizResult(questionId, scaleValue, quizResult);
    setQuizResult(updatedQuizResult);

    if (currentQuestionIndex < questions.length - 1) {
      const newIndex = currentQuestionIndex + 1;
      const finalPercentage = calculatePercentage(currentQuestionIndex, questions.length);
      moveToNextQuestion(newIndex, finalPercentage);
    } else {
      const result = calculateFinalResult(updatedQuizResult);
      setFinalResult(result);
    }
  };

  const resetQuiz = () => {
    setQuizResult({ answers: [] });
    setCurrentQuestionIndex(0);
    setFinalResult(null);
  };

  return (
    <React.Fragment>
      {finalResult ? (
        <Result finalResult={finalResult} onRetry={resetQuiz} />
      ) : (
        <Question
          questionId={questions[currentQuestionIndex].id}
          questionText={questions[currentQuestionIndex].situation}
          percentage={currentPercentage}
          options={questions[currentQuestionIndex].options}
          scale={questions[currentQuestionIndex].scale}
          onAnswer={handleAnswer}
        />
      )}
    </React.Fragment>
  );
};

export default Quiz;
