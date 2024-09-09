import { GROUP_PRIORITY_ORDER } from '@/constants/PersonalityType';

export const getGroupByKey = (key: string): string => {
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

  for (const group in finalScale) {
    const total = Object.values(finalScale[group]).reduce((acc, curr) => acc + curr, 0);

    if (group === '팀에서의 역할' && finalScale[group].A && finalScale[group].D) {
      const attackerScore = finalScale[group].A;
      const defenderScore = finalScale[group].D;
      const balanceThreshold = 10;

      if (Math.abs(attackerScore - defenderScore) <= balanceThreshold) {
        finalScale[group].M = (attackerScore + defenderScore) / 2;
        // delete finalScale[group].A;
        // delete finalScale[group].D;
      }
    }

    for (const key in finalScale[group]) {
      finalScale[group][key] = (finalScale[group][key] / total) * 100;
    }
  }

  return finalScale;
};

export const getTopTypesSorted = (finalResult: IPersonalityTypeScores): string => {
  const selectedTypes = Object.entries(finalResult).map(([group, values]) => {
    if (values.M) {
      return { type: 'M', group };
    }

    const [type1, percentage1] = Object.entries(values)[0];
    const [type2, percentage2] = Object.entries(values)[1];
    return percentage1 >= percentage2 ? { type: type1, group } : { type: type2, group };
  });

  selectedTypes.sort((a, b) => GROUP_PRIORITY_ORDER.indexOf(a.group) - GROUP_PRIORITY_ORDER.indexOf(b.group));

  return selectedTypes.map(item => item.type).join('');
};

export const sortFinalResult = (finalResult: IPersonalityTypeScores): IPersonalityTypeScores => {
  return Object.fromEntries(
    Object.entries(finalResult).sort(([groupA], [groupB]) => {
      return GROUP_PRIORITY_ORDER.indexOf(groupA) - GROUP_PRIORITY_ORDER.indexOf(groupB);
    }),
  );
};
