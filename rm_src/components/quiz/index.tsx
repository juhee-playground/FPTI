import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import QuestionContainer from '@/_rm_src/components/quiz/QuestionContainer';
import QUESTIONS from '@/data/DB_QUESTIONS.json';
import { calculateFinalResult, getTopTypesSorted, sortFinalResult } from '@/utils/calculateResult';
import { generateQueryStringFromNestedResult } from '@/utils/queryString';

const questions = QUESTIONS;

const Quiz = () => {
  const navigate = useNavigate();
  const [quizResult, setQuizResult] = useState<IQuizResult>({ answers: [] });
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentPercentage, setCurrentPercentage] = useState<number>(0);

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
    newAnswers[currentQuestionIndex] = { questionId, scale: scaleValue };

    setQuizResult({ answers: newAnswers });

    if (currentQuestionIndex < questions.length - 1) {
      const newIndex = currentQuestionIndex + 1;
      const finalPercentage = calculatePercentage(currentQuestionIndex, questions.length);
      moveToNextQuestion(newIndex, finalPercentage);
    } else {
      const result = calculateFinalResult({ answers: newAnswers });
      const fpti = getTopTypesSorted(result);
      const sortedFinalResult = sortFinalResult(result);
      const queryString = generateQueryStringFromNestedResult(sortedFinalResult);

      navigate(`/result/${fpti}?finalResult=${queryString}`);
    }
  };

  return (
    <React.Fragment>
      <QuestionContainer
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
    </React.Fragment>
  );
};

export default Quiz;
