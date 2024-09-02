import React, { useState } from 'react';

import Question from '@/components/quiz/Question';
import Result from '@/components/quiz/Result';
import QUESTIONS from '@/data/DB_QUESTIONS.json';

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
      const percent = (currentQuestionIndex + 1 / questions.length) * 100;
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

  const getGroupByKey = (key: string) => {
    const groupMap: { [key: string]: string } = {
      L: '주도형 vs 서포터형',
      S: '주도형 vs 서포터형',
      A: '공격형 vs 수비형',
      G: '공격형 vs 수비형',
      D: '개인기형 vs 패스형',
      P: '개인기형 vs 패스형',
      C: '승부추구형 vs 재미추구형',
      E: '승부추구형 vs 재미추구형',
    };

    return groupMap[key] || 'Unknown';
  };

  const calculateFinalResult = (quizResult: IQuizResult) => {
    const finalScale: { [group: string]: IScaleValue } = {};

    quizResult.answers.forEach(answer => {
      for (const [key, value] of Object.entries(answer.scale)) {
        const group = getGroupByKey(key); // 성향 키(key)로부터 그룹을 얻음

        if (!finalScale[group]) {
          finalScale[group] = { [key]: 0 };
        }

        if (finalScale[group][key]) {
          finalScale[group][key] += value;
        } else {
          finalScale[group][key] = value;
        }
      }
    });

    // 그룹별로 성향 비율 계산 (100%로 정규화)
    for (const group in finalScale) {
      const total = Object.values(finalScale[group]).reduce((acc, curr) => acc + curr, 0);

      for (const key in finalScale[group]) {
        finalScale[group][key] = (finalScale[group][key] / total) * 100;
      }
    }

    return finalScale; // 최종 성향 비율 반환
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
