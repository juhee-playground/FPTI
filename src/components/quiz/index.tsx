import React, { useState } from 'react';

import Question from '@/components/quiz/Question';
import Result from '@/components/quiz/Result';
import QUESTIONS from '@/data/DB_QUESTIONS.json';
import { calculateFinalResult } from '@/utils/calculateResult';

const questions = QUESTIONS;

const Quiz = () => {
  const [quizResult, setQuizResult] = useState<IQuizResult>({ answers: [] });
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentPercentage, setCurrentPercentage] = useState<number>(0);
  const [finalResult, setFinalResult] = useState<IPersonalityTypeScores | null>(null);

  const handleAnswer = (questionId: number, scaleValue: IScaleValue) => {
    setQuizResult(prevResult => ({
      answers: [...prevResult.answers, { questionId, scale: scaleValue }],
    }));

    // 다음 질문으로 이동
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      const percent = ((currentQuestionIndex + 1) / questions.length) * 100; // 퍼센트 계산 명확히 수정
      setCurrentPercentage(percent);
    } else {
      // 마지막 질문에 도달한 경우 결과 계산
      const result = calculateFinalResult({
        ...quizResult,
        answers: [...quizResult.answers, { questionId, scale: scaleValue }],
      });
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
