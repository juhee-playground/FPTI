# FPTI

**FPTI - [ ]Futsal Psychological Type Indicator**

## 설치 및 실행 방법

`
yarn

yarn run dev
`

## 정리

    1.	Offensive (공격형) vs. Defensive (수비형)
    •	Offensive: Attacker (A)
    •	Defensive: Guardian (G)
    •	“Guardian”은 수비적인 역할을 강조하며, 첫 글자 “G”로 “A”와 겹치지 않도록 선택했습니다.
    2.	Dribbling (개인기형) vs. Passing (패스형)
    •	Dribbling: Dribbler (D)
    •	Passing: Playmaker (P)
    •	“Playmaker”는 패스를 중시하는 역할을 의미하며, 첫 글자 “P”로 “S”와 겹치지 않도록 선택했습니다.
    3.	Winning (승부추구형) vs. Fun (재미추구형)
    •	Winning: Competitor (C)
    •	Fun: Entertainer (E)
    4.	Leading (주도형) vs. Supporting (보조형)
    •	Leading: Leader (L)
    •	Supporting: Supporter (S)

[유형]

```typescript
type TPersonalityType = {
  id: string; // 고유 ID (예: "D" for Dribbler)
  name: string; // 유형 이름 (예: "Dribbler")
  설명: string; // 유형에 대한 설명
  주요특징: string[]; // 이 유형을 설명하는 주요 특징들
  강점: string[]; // 이 유형의 강점
  약점: string[]; // 이 유형의 약점
};
```

• Dribbler (D): 개인기를 통해 상대를 돌파하는 플레이어를 의미합니다.
• Playmaker (P): 패스와 경기 운영을 통해 팀을 조율하는 플레이어를 의미합니다.
• Attacker (A): 공격에 집중하여 득점을 목표로 하는 플레이어를 의미합니다.
• Guardian (G): 수비에 집중하여 무실점을 목표로 하는 플레이어를 의미합니다.
• Competitor (C): 승부욕이 강하고 경기에서 이기는 것을 중시하는 플레이어를 의미합니다.
• Entertainer (E): 경기의 재미와 즐거움을 추구하는 플레이어를 의미합니다.
• Leader (L): 팀을 이끌고 주도하는 역할을 맡는 플레이어를 의미합니다.
• Navigator (N): 팀을 지원하고 조율하는 역할을 맡는 플레이어를 의미합니다.

## 할일

[컴포넌트]

- [ ] 진행도(질문)
- [ ] 버튼?
- [ ] 메뉴(홈버튼) -> 다시하기, 홈버튼 정도
- [ ] 결과페이지 -> 어떻게 할지 고민해보기

[기능]

- [ ] 결과 대로 계산해서 유형분석
- [ ] 나와 잘맞는 유형 보여주기
- [ ] 공유하기

[질문 정리]

- [ ] 바뀐 질문으로 교체
- [ ] 유형별 이미지 이름 맟추기
- [ ] 질문에 상세정보 수정
- [ ] 나와 잘 맞는 유형 정리
- [ ] 나와 잘 맞는 훈련법 찾기
