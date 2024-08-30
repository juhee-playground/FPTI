import React, { useState } from 'react';

import Question from '@/components/quiz/Question';
import QUESTIONS from '@/data/DB_QUESTIONS.json';

const questions = QUESTIONS;

const Quiz = () => {
  const [quizResult, setQuizResult] = useState<IQuizResult>({ answers: [] });
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleAnswer = (questionId: number, scaleValue: IScaleValue) => {
    setQuizResult(prevResult => ({
      answers: [...prevResult.answers, { questionId, scale: scaleValue }],
    }));

    // 다음 질문으로 이동
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // 퀴즈 완료
      console.log('Quiz Finished', quizResult);
      // 결과 계산 로직 실행 가능
      const finalResult = calculateFinalResult(quizResult);
      console.log(finalResult); // 예: { D: 65, P: 35 }
    }
  };

  const calculateFinalResult = (quizResult: IQuizResult) => {
    const finalScale: IScaleValue = {};

    quizResult.answers.forEach(answer => {
      for (const [key, value] of Object.entries(answer.scale)) {
        if (finalScale[key]) {
          finalScale[key] += value;
        } else {
          finalScale[key] = value;
        }
      }
    });

    // 성향 비율 계산 (전체 질문 수에 따라 평균 내기)
    for (const key in finalScale) {
      finalScale[key] = finalScale[key] / quizResult.answers.length;
    }

    return finalScale; // 최종 성향 비율 반환
  };

  return (
    <React.Fragment>
      {currentQuestionIndex < questions.length ? (
        <Question
          questionId={questions[currentQuestionIndex].id}
          questionText={questions[currentQuestionIndex].situation}
          options={questions[currentQuestionIndex].options}
          scale={questions[currentQuestionIndex].scale}
          onAnswer={handleAnswer}
        />
      ) : (
        <div>결과가 여기에 표시됩니다.</div>
      )}
    </React.Fragment>
  );
};

export default Quiz;
