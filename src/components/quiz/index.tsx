import React, { useState } from 'react';

import Question from '@/components/quiz/Question';
import Result from '@/components/quiz/Result';
import QUESTIONS from '@/data/DB_QUESTIONS.json';

const questions = QUESTIONS;

const Quiz = () => {
  const [quizResult, setQuizResult] = useState<IQuizResult>({ answers: [] });
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [finalResult, setFinalResult] = useState<IPersonalityTypeScores>({
    'Dribbler vs Playmaker': {
      D: 60,
      P: 40,
    },
    'Competitor vs Entertainer': {
      C: 26.67,
      E: 73.33,
    },
    'Leader vs Supporter': {
      L: 80,
      S: 20,
    },
    'Attacker vs Guardian': {
      A: 70.83,
      G: 29.17,
    },
  });

  const handleAnswer = (questionId: number, scaleValue: IScaleValue) => {
    setQuizResult(prevResult => ({
      answers: [...prevResult.answers, { questionId, scale: scaleValue }],
    }));

    // 다음 질문으로 이동
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
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
      A: 'Attacker vs Guardian',
      G: 'Attacker vs Guardian',
      L: 'Leader vs Supporter',
      S: 'Leader vs Supporter',
      D: 'Dribbler vs Playmaker',
      P: 'Dribbler vs Playmaker',
      C: 'Competitor vs Entertainer',
      E: 'Competitor vs Entertainer',
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

  return (
    <React.Fragment>
      {finalResult ? (
        <Result finalResult={finalResult} />
      ) : (
        <Question
          questionId={questions[currentQuestionIndex].id}
          questionText={questions[currentQuestionIndex].situation}
          options={questions[currentQuestionIndex].options}
          scale={questions[currentQuestionIndex].scale}
          onAnswer={handleAnswer}
        />
      )}
    </React.Fragment>
  );
};

export default Quiz;
