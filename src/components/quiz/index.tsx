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

  const calculatePercentage = (currentIndex: number, totalQuestions: number) => {
    const rawPercentage = ((currentIndex + 1) / totalQuestions) * 100;
    const adjustedPercentage = Math.round(rawPercentage * 10) / 10;
    return adjustedPercentage === 50 ? 50.1 : adjustedPercentage;
  };

  const moveToNextQuestion = (newIndex: number, percentage: number) => {
    setCurrentQuestionIndex(newIndex);
    setCurrentPercentage(percentage);
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      const previousIndex = currentQuestionIndex - 1;
      const previousPercentage = calculatePercentage(previousIndex, questions.length);
      setCurrentQuestionIndex(previousIndex);
      setCurrentPercentage(previousPercentage);
    }
  };

  const handleAnswer = (questionId: number, scaleValue: IScaleValue) => {
    const newAnswers = [...quizResult.answers];
    newAnswers[currentQuestionIndex] = { questionId, scale: scaleValue }; // 현재 인덱스에 답변 저장

    setQuizResult({ answers: newAnswers });

    if (currentQuestionIndex < questions.length - 1) {
      const newIndex = currentQuestionIndex + 1;
      const finalPercentage = calculatePercentage(currentQuestionIndex, questions.length);
      moveToNextQuestion(newIndex, finalPercentage);
    } else {
      const result = calculateFinalResult({ answers: newAnswers });
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
          onPrevious={handlePrevious}
          isFirstQuestion={currentQuestionIndex === 0}
          selectedValue={quizResult.answers[currentQuestionIndex]?.scale || null}
        />
      )}
    </React.Fragment>
  );
};

export default Quiz;
