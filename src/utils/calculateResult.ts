// 그룹을 키로 매핑하는 유틸리티 함수
const getGroupByKey = (key: string): string => {
  const groupMap: { [key: string]: string } = {
    L: '책임감과 주도성',
    S: '책임감과 주도성',
    A: '팀에서의 역할',
    D: '팀에서의 역할',
    M: '팀에서의 역할',
    T: '플레이 스타일',
    P: '플레이 스타일',
    C: '목표와 우선순위',
    E: '목표와 우선순위',
  };

  return groupMap[key] || 'Unknown';
};

// 최종 결과를 계산하는 함수
export const calculateFinalResult = (quizResult: IQuizResult): { [group: string]: IScaleValue } => {
  const finalScale: { [group: string]: IScaleValue } = {};

  quizResult.answers.forEach(answer => {
    for (const [key, value] of Object.entries(answer.scale)) {
      const group = getGroupByKey(key);

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

  // 그룹별로 성향 비율을 계산하고 100%로 정규화
  for (const group in finalScale) {
    const total = Object.values(finalScale[group]).reduce((acc, curr) => acc + curr, 0);

    for (const key in finalScale[group]) {
      finalScale[group][key] = (finalScale[group][key] / total) * 100;
    }
  }

  return finalScale;
};
