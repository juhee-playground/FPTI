interface IPersonalityType {
  id: string;
  name: string;
  type: string;
  description: string;
  characteristics: string[];
  strengths: string[];
  weaknesses: string[];
}

export const PERSONALITY_TYPES: { [key: string]: IPersonalityType } = {
  L: {
    id: 'L',
    name: 'Leader',
    type: '리더형',
    description: '자연스럽게 팀을 이끌고 경기에서 결정적인 역할을 하는 플레이어입니다.',
    characteristics: ['강한 리더십 자질을 가짐', '결정을 내리는 데 능숙함', '팀원들에게 지시를 잘 내림'],
    strengths: ['팀을 잘 조직함', '어려운 상황에서 책임을 짐'],
    weaknesses: ['때로는 너무 통제적일 수 있음', '위임하는 데 어려움을 겪을 수 있음'],
  },
  S: {
    id: 'S',
    name: 'Supporter',
    type: '서포터형',
    description: '팀의 플레이를 안내하고 필요한 곳에서 지원하는 플레이어입니다.',
    characteristics: ['지원적인 역할', '게임을 잘 읽음', '다른 사람들의 활약을 돕는 것을 좋아함'],
    strengths: ['팀원들에게 훌륭한 지원을 제공함', '팀의 안정성과 균형을 제공함'],
    weaknesses: ['주도권이 부족할 수 있음', '더 지배적인 플레이어에 의해 가려질 수 있음'],
  },
  A: {
    id: 'A',
    name: 'Attacker',
    type: '공격형',
    description: '득점을 목표로 하며 팀의 공격을 이끄는 플레이어입니다.',
    characteristics: ['골을 향한 목표 지향적', '최종 구역에서 공격적으로 플레이함'],
    strengths: ['마무리 능력이 뛰어남'],
    weaknesses: ['수비 임무를 소홀히 할 수 있음'],
  },
  M: {
    id: 'M',
    name: 'Midfielder',
    type: '조율형',
    description: '경기의 중심에서 팀의 흐름을 조율하며, 공격과 수비를 연결하는 역할을 하는 플레이어입니다.',
    characteristics: ['넓은 시야를 가짐', '공격과 수비를 유기적으로 연결함', '팀의 균형을 유지하는 데 중점을 둠'],
    strengths: ['패스 능력이 뛰어남', '경기 템포를 조절하는 능력이 있음'],
    weaknesses: ['공격이나 수비에 집중하기보다 중립적인 역할을 할 수 있음', '결정적인 순간에 덜 과감할 수 있음'],
  },
  D: {
    id: 'D',
    name: 'Defender',
    type: '수비형',
    description: '수비를 우선시하며 팀의 무실점을 목표로 하는 플레이어입니다.',
    characteristics: ['수비적인 사고방식을 가짐', '공격을 차단하는 데 집중함', '골을 보호하는 것이 최우선임'],
    strengths: ['수비 능력이 뛰어남', '포지션 선택이 훌륭함'],
    weaknesses: ['공격에 덜 관여할 수 있음', '때때로 너무 보수적일 수 있음'],
  },
  T: {
    id: 'T',
    name: 'Trickster',
    type: '개인기형',
    description: '개인기를 통해 상대를 돌파하는 플레이어입니다.',
    characteristics: ['1:1 상황에서 자신감이 넘침', '위험을 감수하고 도전하는 것을 선호함', '개인 기술에 집중함'],
    strengths: ['수비를 무너뜨리는 데 뛰어남', '수비수를 끌어들여 기회를 만듦'],
    weaknesses: ['공을 너무 오래 소유할 수 있음', '패스 기회를 간과할 수 있음'],
  },
  P: {
    id: 'P',
    name: 'Passer',
    type: '패스형',
    description: '정확한 패스와 뛰어난 시야로 팀의 플레이를 조율하는 플레이어입니다.',
    characteristics: ['필드를 전체적으로 볼 수 있음', '드리블보다 패스를 선호함', '경기의 템포를 조절함'],
    strengths: ['공 배급에 뛰어남', '팀원들에게 득점 기회를 만들어 줌'],
    weaknesses: ['1:1 상황에서 덜 효과적일 수 있음', '패스에 너무 의존하면 예측 가능해질 수 있음'],
  },
  C: {
    id: 'C',
    name: 'Competitor',
    type: '승부욕형',
    description: '승부욕이 강하고 승리를 위해 모든 것을 다하는 플레이어입니다.',
    characteristics: ['매우 경쟁적임', '강한 집중력과 의지를 가짐', '결과에 중점을 둠'],
    strengths: ['포기하지 않음', '팀에 승리 정신을 불어넣음'],
    weaknesses: ['때로는 너무 공격적일 수 있음', '패배할 때 게임을 즐기지 못할 수 있음'],
  },
  E: {
    id: 'E',
    name: 'Entertainer',
    type: '재미추구형',
    description: '경기의 즐거움과 창의적인 플레이를 추구하는 플레이어입니다.',
    characteristics: ['게임을 즐김', '관중을 즐겁게 하는 것을 좋아함', '창의성을 중시함'],
    strengths: ['팀에 긍정적인 에너지를 가져옴', '팀의 사기를 높이는 데 탁월함'],
    weaknesses: ['게임을 진지하게 받아들이지 않을 수 있음', '승리에 대한 집중력이 떨어질 수 있음'],
  },
};

export const GROUP_PRIORITY_ORDER = ['책임감과 주도성', '팀에서의 역할', '플레이 스타일', '목표와 우선순위'];
